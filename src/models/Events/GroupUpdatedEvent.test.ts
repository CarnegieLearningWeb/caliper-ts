import {
	createGroupEventClass,
	createGroupEventGroup,
	createGroupUpdatedEvent,
	createSchool,
	createUser,
	Status,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('GroupUpdatedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const groupEvent = {
		'@context': [
			'http://edgenuity.com/events/group-updated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'GroupEvent',
		action: 'Modified',
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
			id: 'urn:uuid:af4e81c0-c0a9-4365-8254-c277baa08771',
			type: 'Group',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			status: 'Active',
			name: 'Fractions and Stuff Group',
			description: "Kids doin' Fractions and Stuff",
			subjects: ['Math', 'Reading'],
			subOrganizationOf: {
				id: 'urn:uuid:84023718-72d9-44d2-828f-e9e6ca994c62',
				type: 'School',
			},
		},
	};

	it('OK', () => {
		const model = createGroupUpdatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createGroupEventGroup({
				id: Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771'),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				status: Status.Active,
				name: 'Fractions and Stuff Group',
				subjects: ['Math', 'Reading'],
				subOrganizationOf: createSchool({
					id: Caliper.uuid('84023718-72d9-44d2-828f-e9e6ca994c62'),
				}),
				description: "Kids doin' Fractions and Stuff",
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(groupEvent);
	});

	const classEvent = {
		'@context': [
			'http://edgenuity.com/events/group-updated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'GroupEvent',
		action: 'Modified',
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
			id: 'urn:uuid:af4e81c0-c0a9-4365-8254-c277baa08771',
			type: 'Class',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			status: 'Active',
			name: 'Fractions and Stuff Group',
			description: "Kids doin' Fractions and Stuff",
			academicTerm: 'SY2021-2022',
			subjects: ['Math', 'Reading'],
			subOrganizationOf: {
				id: 'urn:uuid:84023718-72d9-44d2-828f-e9e6ca994c62',
				type: 'School',
			},
		},
	};

	it('OK Class', () => {
		const model = createGroupUpdatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createGroupEventClass({
				id: Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771'),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				status: Status.Active,
				name: 'Fractions and Stuff Group',
				academicTerm: 'SY2021-2022',
				subjects: ['Math', 'Reading'],
				subOrganizationOf: createSchool({
					id: Caliper.uuid('84023718-72d9-44d2-828f-e9e6ca994c62'),
				}),
				description: "Kids doin' Fractions and Stuff",
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(classEvent);
	});
});
