import { Envelope } from '../envelope';

export interface Client {
	getId(): string;
	send<TEnvelope, TResponse>(envelope: Envelope<TEnvelope>): Promise<TResponse>;
	queueDeadletterMessage<TEnvelope>(message: DeadletterMessage<TEnvelope>): Promise<void>;
}

export interface DeadletterMessage<TEnvelope> {
	error: string;
	source: string;
	destination?: string;
	payload: Envelope<TEnvelope>;
}
