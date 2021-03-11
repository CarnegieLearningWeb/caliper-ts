import { validate as validateSchema } from 'jsonschema';
import { Event } from './models/Events/Event';
import { schemas } from './models/schemas';

function getSchema<T extends Event>(event: T) {
	const [context] = event['@context'];
	return schemas[context];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate<T extends Event>(event: T, schema?: Record<string, any>) {
	const { errors, valid } = validateSchema(event, schema ?? getSchema(event));
	if (!valid) {
		throw errors.map((error) => error.stack);
	}
}
