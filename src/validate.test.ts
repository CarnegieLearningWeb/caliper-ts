import Caliper from './caliper';
import { createInstructor } from './models/Entities/Instructor';
import { createOrganization } from './models/Entities/Organization';
import { Status } from './models/Entities/Status';
import { createUser } from './models/Entities/User';
import { CaliperAction } from './models/Events/CaliperAction';
import { createUserEventStudent } from './models/Events/Internals/UserEvent';
import { createOrganizationActivatedEvent } from './models/Events/OrganizationActivatedEvent';
import { createUserCreatedEvent } from './models/Events/UserCreatedEvent';
import { createSystemIdentifier } from './models/SystemIdentifier';
import { SystemIdentifierType } from './models/SystemIdentifierType';
import { validate } from './validate';

describe('validate(..)', () => {
	beforeEach(() => {
		Caliper.settings.applicationUri = 'https://unit.test';
	});

	afterEach(() => {
		Caliper.settings.applicationUri = null;
	});

	it('passes for valid UserCreatedEvent', () => {
		const timestamp = Caliper.timestamp(new Date());
		const event = createUserCreatedEvent({
			actor: createInstructor({ id: 'https://foo.bar/user/1' }),
			object: createUserEventStudent({
				id: 'https://foo.bar/user/9999',
				dateCreated: timestamp,
				dateModified: timestamp,
				firstName: 'Marc',
				lastName: 'Lim',
				status: Status.Active,
				gradeLevel: 1,
				englishLanguageLearner: true,
				individualEducationPlan: true,
				otherIdentifiers: [
					createSystemIdentifier({
						sourceUrl: 'https://nwea.org',
						identifier: 'https://nwea.org/fake-user/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
						identifierType: SystemIdentifierType.SystemId,
					}),
					createSystemIdentifier({
						sourceUrl: 'https://whatever.com/external',
						identifier: '8ece0ac2-b4cd-4e66-ae26-a59cec4edad7',
						identifierType: SystemIdentifierType.SystemId,
					}),
					createSystemIdentifier({
						sourceUrl: 'https://renaissance.com',
						identifier: 'ABC0005',
						identifierType: SystemIdentifierType.SystemId,
					}),
					createSystemIdentifier({
						sourceUrl: 'https://the-lmsadmin-url.com',
						identifier: '12345',
						identifierType: SystemIdentifierType.SystemId,
					}),
				],
				settings: {
					spanishLanguage: ['math'],
					languageTranslationTools: ['math', 'reading'],
					textToSpeech: ['math', 'reading'],
				},
			}),
		});
		expect(() => validate(event)).not.toThrowError();
	});

	it('passes for valid OrganizationActivatedEvent', () => {
		const event = createOrganizationActivatedEvent({
			actor: createUser({ id: 'https://foo.bar/user/1' }),
			object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
		});
		expect(() => validate(event)).not.toThrowError();
	});

	it('throws error for invalid ID', () => {
		const event = createOrganizationActivatedEvent({
			actor: createUser({ id: 'https://foo.bar/user/1' }),
			object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
		});
		event.id = 'this-is-not-a-valid-event-id';

		expect(() => validate(event)).toThrowError();
	});

	it('throws error for invalid event action', () => {
		const event = createOrganizationActivatedEvent({
			actor: createUser({ id: 'https://foo.bar/user/1' }),
			object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
		});
		event.action = CaliperAction.ChangedResolution;

		expect(() => validate(event)).toThrowError();
	});

	it('throws error for invalid timestamp', () => {
		const event = createOrganizationActivatedEvent({
			actor: createUser({ id: 'https://foo.bar/user/1' }),
			object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
		});
		event.eventTime = 'whatever, blah blah';

		expect(() => validate(event)).toThrowError();
	});

	it('throws error for invalid entity ID', () => {
		const event = createOrganizationActivatedEvent({
			actor: createUser({ id: 'https://foo.bar/user/1' }),
			object: createOrganization({ id: 'cab85afa-de4f-4ee0-bce3-66030d906c25' }),
		});

		expect(() => validate(event)).toThrowError();
	});
});
