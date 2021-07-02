import {
	createLoginEventSoftwareApplication,
	createLoginFailedEvent,
	createLoginFailedEventUserSession,
	createSoftwareApplication,
	createUser,
	CredentialType,
	LoginType,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('LoginFailedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://identity.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/login-failed/0-1-0',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:cf32353c-dbd3-42d5-90a4-02830409c2bd',
		type: 'SessionEvent',
		action: 'Declined',
		eventTime: '2020-09-22T22:31:28.000Z',
		edApp: {
			id: 'https://identity.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:unidentified-user',
			type: 'User',
		},
		object: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		session: {
			id: 'urn:uuid:31e1ab8e-f7d2-4656-a4bb-719a823ebd2b',
			type: 'UserSession',
			description: '401 Unauthorized',
			login: {
				localTimestamp: '2020-09-22T22:31:28.000-07:00',
				loginType: 'LtiSSO',
				credentialTypes: ['Username', 'Password'],
				scopes: ['edgenuity-app', 'edgenuity-reports'],
			},
			client: {
				id: 'urn:uuid:4f438daf-f018-48ad-a685-3d7b5740b69f',
				type: 'SoftwareApplication',
				userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0',
				ipAddress: '192.168.0.1',
			},
		},
	};

	it('OK', () => {
		const model = createLoginFailedEvent({
			actor: createUser({ id: 'urn:unidentified-user' }),
			object: createSoftwareApplication({ id: 'https://app.edgenuity.com' }),
			session: createLoginFailedEventUserSession({
				id: Caliper.uuid('31e1ab8e-f7d2-4656-a4bb-719a823ebd2b'),
				description: '401 Unauthorized',
				login: {
					localTimestamp: '2020-09-22T22:31:28.000-07:00',
					loginType: LoginType.LtiSSO,
					credentialTypes: [CredentialType.Username, CredentialType.Password],
					scopes: ['edgenuity-app', 'edgenuity-reports'],
				},
				client: createLoginEventSoftwareApplication({
					id: Caliper.uuid('4f438daf-f018-48ad-a685-3d7b5740b69f'),
					userAgent:
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0', //window.navigator.userAgent,
					ipAddress: '192.168.0.1',
				}),
			}),
		});
		validate(model);

		model.id = Caliper.uuid('cf32353c-dbd3-42d5-90a4-02830409c2bd');
		model.eventTime = Caliper.timestamp('2020-09-22T22:31:28Z');
		expect(model).toEqual(expected);
	});
});
