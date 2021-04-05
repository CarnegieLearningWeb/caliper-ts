import {
	createSystemIdentifier,
	createUser,
	createUserDeletedEvent,
	createUserEventStudent,
	Status,
	SystemIdentifierType,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('UserDeletedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/user-deleted/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'UserEvent',
		action: 'Deleted',
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
			type: 'Student',
			name: 'Foo Bar',
			firstName: 'Foo',
			lastName: 'Bar',
			gradeLevel: 3,
			dateCreated: '2021-01-01T12:30:00.000Z',
			dateModified: '2021-01-01T15:30:00.000Z',
			status: 'Active',
			individualEducationPlan: true,
			englishLanguageLearner: true,
			otherIdentifiers: [
				{
					type: 'SystemIdentifier',
					identifier: 'https://nwea.org/fake-user/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					identifierType: 'SystemId',
					source: {
						id: 'https://nwea.org',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: '8ece0ac2-b4cd-4e66-ae26-a59cec4edad7',
					identifierType: 'SystemId',
					source: {
						id: 'https://whatever.com/external',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'ABC0005',
					identifierType: 'SystemId',
					source: {
						id: 'https://renaissance.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: '12345',
					identifierType: 'SystemId',
					source: {
						id: 'https://the-lmsadmin-url.com',
						type: 'SoftwareApplication',
					},
				},
			],
			settings: {
				spanishLanguage: ['math'],
				textToSpeech: ['math', 'reading'],
				languageTranslationTools: ['math', 'reading'],
				myAdditionalSetting1: 'value',
			},
		},
	};

	it('OK', () => {
		const model = createUserDeletedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createUserEventStudent({
				id: Caliper.uuid('a1d5c07b-688c-41aa-b492-30c67084c8cc'),
				dateCreated: Caliper.timestamp('2021-01-01T12:30:00Z'),
				dateModified: Caliper.timestamp('2021-01-01T15:30:00Z'),
				status: Status.Active,
				firstName: 'Foo',
				lastName: 'Bar',
				name: 'Foo Bar',
				gradeLevel: 3,
				individualEducationPlan: true,
				englishLanguageLearner: true,
				otherIdentifiers: [
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://nwea.org',
						identifier: 'https://nwea.org/fake-user/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://whatever.com/external',
						identifier: '8ece0ac2-b4cd-4e66-ae26-a59cec4edad7',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://renaissance.com',
						identifier: 'ABC0005',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://the-lmsadmin-url.com',
						identifier: (12345).toString(),
					}),
				],
				settings: {
					spanishLanguage: ['math'],
					textToSpeech: ['math', 'reading'],
					languageTranslationTools: ['math', 'reading'],
					myAdditionalSetting1: 'value',
				},
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(expected);
	});
});
