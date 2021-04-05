import Caliper from './caliper';
import { validate } from './validate';
import {
	createInstructor,
	createOrganization,
	Status,
	createUser,
	CaliperAction,
	createUserEventStudent,
	createOrganizationActivatedEvent,
	createUserCreatedEvent,
	createSystemIdentifier,
	SystemIdentifierType,
} from './models';

describe('validate(..)', () => {
	beforeEach(() => {
		Caliper.settings.applicationUri = 'https://unit.test';
	});

	afterEach(() => {
		Caliper.settings.applicationUri = undefined;
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
				name: 'Marc Lim',
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

	describe('event.id', () => {
		it('passes for guid in urn format', () => {
			const event = createOrganizationActivatedEvent({
				actor: createUser({ id: 'https://foo.bar/user/1' }),
				object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
			});
			event.id = Caliper.uuid('a1d5c07b-688c-41aa-b492-30c67084c8cc');

			expect(event.id).toEqual('urn:uuid:a1d5c07b-688c-41aa-b492-30c67084c8cc');
		});

		it('throws error for non-guid', () => {
			const event = createOrganizationActivatedEvent({
				actor: createUser({ id: 'https://foo.bar/user/1' }),
				object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
			});
			event.id = 'this-is-not-a-valid-event-id';

			expect(() => validate(event)).toThrowError();
		});

		it('throws error for guid not in urn format', () => {
			const event = createOrganizationActivatedEvent({
				actor: createUser({ id: 'https://foo.bar/user/1' }),
				object: createOrganization({ id: Caliper.uuid('cab85afa-de4f-4ee0-bce3-66030d906c25') }),
			});
			event.id = 'a1d5c07b-688c-41aa-b492-30c67084c8cc'; // must use Caliper.uuid(..)

			expect(() => validate(event)).toThrowError();
		});
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
