import { createOrganization, createOrganizationActivatedEvent, createUser } from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('OrganizationActivatedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/organization-activated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'OrganizationEvent',
		action: 'Activated',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:f41448d9-76e5-4171-8e0a-3e0e237a8581',
			type: 'User',
		},
		object: {
			id: 'urn:uuid:0fa3c515-38b5-4e77-aabf-30cde6bf2c8d',
			type: 'Organization',
		},
	};

	it('OK', () => {
		const model = createOrganizationActivatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createOrganization({ id: Caliper.uuid('0fa3c515-38b5-4e77-aabf-30cde6bf2c8d') }),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T15:00:00Z');
		expect(model).toEqual(expected);
	});
});
