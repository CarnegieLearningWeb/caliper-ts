import {
	createLoginEventUserSession,
	createLoginSuccessEvent,
	createSoftwareApplication,
	createUser,
	CredentialType,
	LoginType,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';
import { createInstructor } from '../Entities/Instructor';
import { Role } from '../Entities/Role';
import { createSchool } from '../Entities/School';
import { createLoginEventSoftwareApplication } from './Internals/LoginEvent';
import { createLoginMembership } from './LoginMembership';

describe('LoginSuccessEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://identity.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/login-success/0-1-0',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:cf32353c-dbd3-42d5-90a4-02830409c2bd',
		type: 'SessionEvent',
		action: 'LoggedIn',
		eventTime: '2020-09-22T22:31:28.000Z',
		edApp: {
			id: 'https://identity.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:22c9865c-7252-4cf7-9580-f56476f24df6',
			type: 'Instructor',
		},
		object: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		membership: {
			id: 'urn:uuid:9283824d-4f9d-4061-b256-4eebc13bcf61',
			type: 'Membership',
			organization: {
				id: 'urn:uuid:a627c09d-bbcd-4d76-bd02-375cf4c1d4f1',
				type: 'School',
			},
			roles: ['Instructor'],
		},
		session: {
			id: 'urn:uuid:31e1ab8e-f7d2-4656-a4bb-719a823ebd2b',
			type: 'UserSession',
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
		const model = createLoginSuccessEvent({
			actor: createInstructor({ id: Caliper.uuid('22c9865c-7252-4cf7-9580-f56476f24df6') }),
			object: createSoftwareApplication({ id: 'https://app.edgenuity.com' }),
			membership: createLoginMembership({
				id: Caliper.uuid('9283824d-4f9d-4061-b256-4eebc13bcf61'),
				organization: createSchool({ id: Caliper.uuid('a627c09d-bbcd-4d76-bd02-375cf4c1d4f1') }),
				roles: [Role.INSTRUCTOR],
			}),
			session: createLoginEventUserSession({
				id: Caliper.uuid('31e1ab8e-f7d2-4656-a4bb-719a823ebd2b'),
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

	describe('OK with valid ip address', () => {
		const validIpAddresses = [
			'192.168.0.1',
			'255.255.255.255',
			'2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF',
		];
		test.each(validIpAddresses)('%p', (ipAddress) => {
			const model = createLoginSuccessEvent({
				actor: createUser({ id: 'https://app.edgenuity.com/user/12345' }),
				object: createSoftwareApplication({ id: 'https://app.edgenuity.com' }),
				membership: createLoginMembership({
					id: Caliper.uuid('9283824d-4f9d-4061-b256-4eebc13bcf61'),
					organization: createSchool({ id: Caliper.uuid('a627c09d-bbcd-4d76-bd02-375cf4c1d4f1') }),
					roles: [Role.INSTRUCTOR],
				}),
				session: createLoginEventUserSession({
					id: 'https://identity.edgenuity.com/session/12345',
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
						ipAddress,
					}),
				}),
			});
			validate(model);
		});
	});

	describe('FAIL with invalid ip address', () => {
		const invalidIpAddresses = ['asd', '192.168.0.1.999', '2001:db8:3333:4444:CCCC:DDDD:EEEE'];
		test.each(invalidIpAddresses)('%p', (ipAddress) => {
			const model = createLoginSuccessEvent({
				actor: createUser({ id: 'https://app.edgenuity.com/user/12345' }),
				object: createSoftwareApplication({ id: 'https://app.edgenuity.com' }),
				membership: createLoginMembership({
					id: Caliper.uuid('9283824d-4f9d-4061-b256-4eebc13bcf61'),
					organization: createSchool({ id: Caliper.uuid('a627c09d-bbcd-4d76-bd02-375cf4c1d4f1') }),
					roles: [Role.INSTRUCTOR],
				}),
				session: createLoginEventUserSession({
					id: 'https://identity.edgenuity.com/session/12345',
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
						ipAddress,
					}),
				}),
			});
			expect(() => validate(model)).toThrowError();
		});
	});
});
