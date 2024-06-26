import Caliper from './caliper';
import { Client } from './clients/client';
import { DEFAULT_CONFIG, getJsonLdContext } from './config/config';
import { createEnvelope, Envelope, EnvelopeOptions } from './envelope';
import { SoftwareApplication } from './models/Entities/SoftwareApplication';
import { Event } from './models/Events/Event';
import { validate } from './validate';

export interface SensorConfig {
	edApp?: SoftwareApplication;
	validationEnabled?: boolean;
	clients?: Record<string, Client>;
}

export class Sensor {
	private edApp?: SoftwareApplication;

	private validationEnabled = true;

	private clients: Record<string, Client> = {};

	constructor(
		private id: string,
		{ edApp, validationEnabled = true, clients = {} }: SensorConfig = {}
	) {
		if (!id) {
			throw new Error('Caliper Sensor identifier (id) has not been provided.');
		}

		this.edApp = edApp;
		this.clients = clients;
		this.validationEnabled = validationEnabled;
	}

	createEnvelope<T extends Event>(options: Partial<EnvelopeOptions<T>>) {
		if (options.data === null || options.data === undefined) {
			throw new Error('Caliper Sensor Envelope data has not been provided.');
		}

		const sensor = options.sensor ?? this.id;
		const sendTime = options.sendTime ?? Caliper.timestamp();
		const dataVersion =
			options.dataVersion ?? getJsonLdContext(DEFAULT_CONFIG, DEFAULT_CONFIG.dataVersion);
		return createEnvelope<T>({ sensor, sendTime, dataVersion, data: options.data });
	}

	createEvent<TEvent extends Event, TParams>(
		eventFactory: (params: TParams, edApp?: SoftwareApplication) => TEvent,
		params: TParams
	) {
		return eventFactory(params, this.edApp);
	}

	getClient(id: string) {
		return this.clients[id];
	}

	getClients() {
		return Object.values(this.clients);
	}

	getEdApp() {
		return this.edApp;
	}

	getId() {
		return this.id;
	}

	registerClient(client: Client) {
		this.clients[client.getId()] = client;
	}

	sendToClient<TEnvelope extends Event, TResponse>(
		client: Client | string,
		envelope: Envelope<TEnvelope>
	) {
		const httpClient = this.clients[typeof client === 'string' ? client : client.getId()];
		if (!httpClient) {
			throw new Error('Chosen Client has not been registered.');
		}

		const validationError = this.validateEvents(envelope.data);
		if (validationError !== null) {
			const message = {
				error: validationError.message,
				source: this.edApp ? this.edApp.id : (Caliper.settings.applicationUri as string),
				payload: envelope,
			};
			httpClient.queueDeadletterMessage(message);
		}

		return httpClient.send<TEnvelope, TResponse>(envelope);
	}

	sendToClients<TEnvelope extends Event, TResponse>(envelope: Envelope<TEnvelope>) {
		const clients = this.getClients();
		if (!clients.length) {
			throw new Error('No Clients have been registered.');
		}

		const validationError = this.validateEvents(envelope.data);
		if (validationError !== null) {
			return Promise.all(
				clients.map((client) => {
					const message = {
						error: validationError.message,
						source: this.edApp ? this.edApp.id : (Caliper.settings.applicationUri as string),
						payload: envelope,
					};
					return client.queueDeadletterMessage(message);
				})
			);
		}

		return Promise.all(clients.map((client) => client.send<TEnvelope, TResponse>(envelope)));
	}

	unregisterClient(id: string) {
		delete this.clients[id];
	}

	private validateEvents(events: Event[]) {
		if (!this.validationEnabled) {
			return null;
		}

		let isValid = true;
		const validationErrors: string[] = [];
		events.forEach((event) => {
			try {
				validate(event);
				validationErrors.push('Other events in the batch were invalid');
			} catch (error) {
				isValid = false;
				if (Array.isArray(error)) {
					const e = error as string[];

					validationErrors.push(`${event.id}: ${e.join('\n\t')}`);
				} else {
					const e = error as Error;

					validationErrors.push(`${event.id}: ${e.message}\n${e.stack}`);
				}
			}
		});

		return isValid ? null : new Error(validationErrors.join('\n'));
	}
}
