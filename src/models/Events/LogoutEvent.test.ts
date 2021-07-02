import { createLogoutEvent, createSoftwareApplication, createStudent, createUserSession } from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('LogoutEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://identity.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/logout/0-1-0',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:cf32353c-dbd3-42d5-90a4-02830409c2bd',
		type: 'SessionEvent',
		action: 'LoggedOut',
		eventTime: '2020-09-22T22:31:28.000Z',
		edApp: {
			id: 'https://identity.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:22c9865c-7252-4cf7-9580-f56476f24df6',
			type: 'Student',
		},
		object: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		session: {
			id: 'urn:uuid:31e1ab8e-f7d2-4656-a4bb-719a823ebd2b',
			type: 'UserSession',
		},
	};

	it('OK', () => {
		const model = createLogoutEvent({
			actor: createStudent({ id: Caliper.uuid('22c9865c-7252-4cf7-9580-f56476f24df6') }),
			object: createSoftwareApplication({ id: 'https://app.edgenuity.com' }),
			session: createUserSession({ id: Caliper.uuid('31e1ab8e-f7d2-4656-a4bb-719a823ebd2b') }),
		});
		validate(model);

		model.id = Caliper.uuid('cf32353c-dbd3-42d5-90a4-02830409c2bd');
		model.eventTime = Caliper.timestamp('2020-09-22T22:31:28Z');
		expect(model).toEqual(expected);
	});
});
