import {
	createAssessment,
	createBenchmarkEvent,
	createBenchmarkEventAttempt,
	createBenchmarkEventScore,
	createBenchmarkEventStudent,
	createSoftwareApplication,
	createSystemIdentifier,
	SystemIdentifierType,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('Generic BenchmarkEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/benchmark/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'BenchmarkEvent',
		action: 'Graded',
		eventTime: '2020-09-22T12:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'https://whatever.com',
			type: 'SoftwareApplication',
		},
		object: {
			id: 'urn:uuid:af4e81c0-c0a9-4365-8254-c277baa08771',
			type: 'Attempt',
			dateCreated: '2020-01-01T12:00:00Z',
			assignable: {
				id: 'urn:uuid:a84dc6e1-dbde-4da2-a1c8-1415ce19c5eb',
				type: 'Assessment',
			},
			assignee: {
				id: 'urn:uuid:ec3b84f0-ca55-4b0d-8ffd-4b1cdf5ab9ae',
				type: 'Student',
				gradeLevel: 5,
				otherIdentifiers: [
					{
						type: 'SystemIdentifier',
						identifierType: 'SystemId',
						identifier: '43c29652-9b24-41bd-af3f-57648672432f',
						source: {
							type: 'SoftwareApplication',
							id: 'https://whatever.com',
						},
					},
				],
			},
		},
		generated: {
			id: 'urn:uuid:e8d7d46e-edcf-40a1-b31d-b1461cb483c2',
			type: 'Score',
			scoreGiven: 140.0,
			extensions: {
				whateverStudent: {
					id: '43c29652-9b24-41bd-af3f-57648672432f',
					firstName: 'Foo',
					lastName: 'Bar',
					grade: 5,
				},
				whateverTest: {
					id: 'a84dc6e1-dbde-4da2-a1c8-1415ce19c5eb',
					name: 'Genius Test',
					timestamp: '2020-01-01T12:00:00Z',
					subject: 'Language Arts',
				},
				whateverResult: {
					id: 'e8d7d46e-edcf-40a1-b31d-b1461cb483c2',
					score: 140,
					answers: ['Person', 'Woman', 'Man', 'Camera', 'TV'],
				},
				otherGibberish1: 'Hooplah',
				otherGibberish2: 12345,
			},
		},
	};

	it('OK', () => {
		const payload = {
			whateverStudent: {
				id: '43c29652-9b24-41bd-af3f-57648672432f',
				firstName: 'Foo',
				lastName: 'Bar',
				grade: 5,
			},
			whateverTest: {
				id: 'a84dc6e1-dbde-4da2-a1c8-1415ce19c5eb',
				name: 'Genius Test',
				timestamp: '2020-01-01T12:00:00Z',
				subject: 'Language Arts',
			},
			whateverResult: {
				id: 'e8d7d46e-edcf-40a1-b31d-b1461cb483c2',
				score: 140,
				answers: ['Person', 'Woman', 'Man', 'Camera', 'TV'],
			},
			otherGibberish1: 'Hooplah',
			otherGibberish2: 12345,
		};

		// Events should only utilize known WNE IDs, not external IDs
		const wneStudent = {
			Id: 'ec3b84f0-ca55-4b0d-8ffd-4b1cdf5ab9ae',
			GradeLevel: 5,
		};

		const model = createBenchmarkEvent({
			actor: createSoftwareApplication({ id: 'https://whatever.com' }),
			object: createBenchmarkEventAttempt({
				id: Caliper.uuid(),
				dateCreated: payload.whateverTest.timestamp,
				assignable: createAssessment({
					id: Caliper.uuid(payload.whateverTest.id),
				}),
				assignee: createBenchmarkEventStudent({
					id: Caliper.uuid(wneStudent.Id),
					gradeLevel: wneStudent.GradeLevel,
					otherIdentifiers: [
						createSystemIdentifier({
							identifierType: SystemIdentifierType.SystemId,
							sourceUrl: 'https://whatever.com',
							identifier: payload.whateverStudent.id,
						}),
					],
				}),
			}),
			generated: createBenchmarkEventScore({
				id: Caliper.uuid(payload.whateverResult.id),
				scoreGiven: payload.whateverResult.score,
				extensions: payload,
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T12:00:00Z');
		model.object.id = Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771');
		expect(model).toEqual(expected);
	});
});
