import { createUser, createUserActivatedEvent } from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('UserActivatedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/user-activated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'UserEvent',
		action: 'Activated',
		eventTime: '2021-01-01T15:30:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:f41448d9-76e5-4171-8e0a-3e0e237a8581',
			type: 'User',
		},
		object: {
			id: 'urn:uuid:a1d5c07b-688c-41aa-b492-30c67084c8cc',
			type: 'User',
		},
	};

	it('OK', () => {
		const model = createUserActivatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createUser({ id: Caliper.uuid('a1d5c07b-688c-41aa-b492-30c67084c8cc') }),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2021-01-01T15:30:00Z');
		expect(model).toEqual(expected);
	});
});
