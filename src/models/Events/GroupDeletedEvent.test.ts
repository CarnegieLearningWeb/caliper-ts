import { createClass, createGroup, createGroupDeletedEvent, createUser } from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('GroupDeletedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const groupEvent = {
		'@context': [
			'http://edgenuity.com/events/group-deleted/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'GroupEvent',
		action: 'Deleted',
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
		},
	};

	it('OK', () => {
		const model = createGroupDeletedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createGroup({ id: Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771') }),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T15:00:00Z');
		expect(model).toEqual(groupEvent);
	});

	const classEvent = {
		'@context': [
			'http://edgenuity.com/events/group-deleted/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'GroupEvent',
		action: 'Deleted',
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
		},
	};

	it('OK Class', () => {
		const model = createGroupDeletedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createClass({ id: Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771') }),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T15:00:00Z');
		expect(model).toEqual(classEvent);
	});
});
