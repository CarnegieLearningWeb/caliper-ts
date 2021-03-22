import { validate as validateSchema } from 'jsonschema';
import { Event } from './models/Events/Event';
import { schemas } from './models/schemas';

function getSchema<T extends Event>(event: T) {
	const [context] = event['@context'];
	return schemas[context];
}

export function validate<T extends Event>(
	event: T,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	schema: Record<string, any> = getSchema(event)
) {
	if (!schema) {
		return;
	}
	const { errors, valid } = validateSchema(event, schema);
	if (!valid) {
		throw errors.map((error) => error.stack);
	}
}
