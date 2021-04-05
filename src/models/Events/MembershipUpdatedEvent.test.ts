import {
	createMembershipEventClass,
	createMembershipEventMembership,
	createMembershipUpdatedEvent,
	createStudent,
	createUser,
	Role,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('MembershipUpdatedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.whatever.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/membership-updated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'MembershipEvent',
		action: 'Modified',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.whatever.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:f41448d9-76e5-4171-8e0a-3e0e237a8581',
			type: 'User',
		},
		object: {
			id: 'urn:uuid:400fe860-2f44-471f-ab9d-d0836289e17c',
			type: 'Membership',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			member: {
				id: 'urn:uuid:5c0641e1-f354-4b3c-a588-0206f1f7973d',
				type: 'Student',
			},
			organization: {
				id: 'urn:uuid:32af9397-1eb7-42ff-bdf1-524e4e8144c2',
				type: 'Class',
				name: 'Math and stuff',
			},
			roles: ['Learner'],
		},
	};

	it('OK', () => {
		const model = createMembershipUpdatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createMembershipEventMembership({
				id: Caliper.uuid('400fe860-2f44-471f-ab9d-d0836289e17c'),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				member: createStudent({ id: Caliper.uuid('5c0641e1-f354-4b3c-a588-0206f1f7973d') }),
				roles: [Role.LEARNER],
				organization: createMembershipEventClass({
					id: Caliper.uuid('32af9397-1eb7-42ff-bdf1-524e4e8144c2'),
					name: 'Math and stuff',
				}),
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(expected);
	});
});
