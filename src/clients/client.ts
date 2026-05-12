import { CaliperSendOptions } from "../caliper-delivery-options";
import { Envelope } from "../envelope";

export interface Client {
	getId(): string;
	send<TEnvelope, TResponse>(
		envelope: Envelope<TEnvelope>,
		options: CaliperSendOptions
	): Promise<TResponse>;
	queueDeadletterMessage<TEnvelope>(
		message: DeadletterMessage<TEnvelope>
	): Promise<void>;
}

export interface DeadletterMessage<TEnvelope> {
	error: string;
	source: string;
	destination?: string;
	payload: Envelope<TEnvelope>;
}
