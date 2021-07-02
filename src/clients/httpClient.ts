import ky from 'ky-universal';
import Caliper from '../caliper';
import { Envelope } from '../envelope';
import { Client, DeadletterMessage } from './client';

export interface ClientOptions {
	uri: string;
	headers: Record<string, string>;
	deadletterUrl?: string;
}

export class HttpClient implements Client {
	constructor(private id: string, private options: ClientOptions) {
		if (!id) {
			throw new Error('Caliper Sensor Client identifier (id) has not been provided.');
		}
		if (!Object.getOwnPropertyNames(options).length) {
			throw new Error('No options have been provided.');
		}
	}

	bearer(token?: string) {
		const options = { ...this.options };
		if (token) {
			options.headers = {
				...options.headers,
				// eslint-disable-next-line @typescript-eslint/naming-convention
				Authorization: `Bearer ${token}`,
			};
		}
		return new HttpClient(this.id, options);
	}

	getId() {
		return this.id;
	}

	getHeaders() {
		return this.options.headers;
	}

	getUri() {
		return this.options.uri;
	}

	async send<TEnvelope, TResponse>(envelope: Envelope<TEnvelope>) {
		if (Object.keys(envelope).length === 0) {
			throw new Error('Chosen Requestor has not been registered.');
		}

		const task = ky.post(this.options.uri, {
			json: envelope,
			headers: this.options.headers,
		});

		const response = await task;
		if (!response.ok) {
			const message = {
				error: await response.text(),
				source: Caliper.settings.applicationUri as string,
				payload: envelope,
			};
			await this.queueDeadletterMessage(message);
		}

		return task.json<TResponse>();
	}

	async queueDeadletterMessage<TEnvelope>(message: DeadletterMessage<TEnvelope>) {
		if (!this.options.deadletterUrl) {
			return;
		}

		const response = await ky.post(this.options.deadletterUrl, {
			json: { ...message, destination: this.options.uri },
			headers: this.options.headers,
		});

		if (!response.ok) {
			throw new Error(`Failed to deadletter envelope. ${await response.text()}`);
		}
	}
}

export function httpClient(id: string, uri: string, token?: string, deadletterUrl?: string) {
	const options = { uri, deadletterUrl, headers: {} } as ClientOptions;
	return new HttpClient(id, options).bearer(token);
}
