import {
	createRenaissanceBenchmarkEvent,
	createBenchmarkEventAttempt,
	createBenchmarkEventAssessment,
	createBenchmarkEventStudent,
	createSystemIdentifier,
	SystemIdentifierType,
	createBenchmarkEventScore,
	createSoftwareApplication,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('RenaissanceBenchmarkEvent', () => {
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
			id: 'https://renaissance.com',
			type: 'SoftwareApplication',
		},
		object: {
			id: 'urn:uuid:af4e81c0-c0a9-4365-8254-c277baa08771',
			type: 'Attempt',
			dateCreated: '2020-01-01T12:00:00Z',
			assignable: {
				id: 'urn:test:renaissance:some-renaissance-test',
				type: 'Assessment',
				subject: 'Reading',
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
							id: 'https://renaissance.com',
						},
					},
				],
			},
		},
		generated: {
			id: 'urn:uuid:e8d7d46e-edcf-40a1-b31d-b1461cb483c2',
			type: 'Score',
			academicTerm: 'SY2021-2022',
			scoreGiven: 95.0,
			extensions: {
				studentId: '43c29652-9b24-41bd-af3f-57648672432f',
				test: 'some-renaissance-test',
				testDate: '2020-01-01T12:00:00',
				scaledScore: 95.0,
			},
		},
	};

	it('OK', () => {
		const payload = {
			studentId: '43c29652-9b24-41bd-af3f-57648672432f',
			test: 'some-renaissance-test',
			testDate: '2020-01-01T12:00:00',
			scaledScore: 95.0,
		};

		// Events should only utilize known WNE IDs, not external IDs
		const wneAssessment = {
			Id: '18ac07b6-9bc1-438d-be2a-f5c8b03e3fa6',
			Subject: 'Reading',
		};
		const wneStudent = {
			Id: 'ec3b84f0-ca55-4b0d-8ffd-4b1cdf5ab9ae',
			GradeLevel: 5,
		};

		const model = createRenaissanceBenchmarkEvent({
			actor: createSoftwareApplication({ id: 'https://renaissance.com' }),
			object: createBenchmarkEventAttempt({
				id: Caliper.uuid(),
				dateCreated: `${payload.testDate}Z`,
				assignable: createBenchmarkEventAssessment({
					id: `urn:test:renaissance:${payload.test}`,
					subject: wneAssessment.Subject,
				}),
				assignee: createBenchmarkEventStudent({
					id: Caliper.uuid(wneStudent.Id),
					gradeLevel: wneStudent.GradeLevel,
					otherIdentifiers: [
						createSystemIdentifier({
							identifierType: SystemIdentifierType.SystemId,
							sourceUrl: 'https://renaissance.com',
							identifier: payload.studentId,
						}),
					],
				}),
			}),
			generated: createBenchmarkEventScore({
				id: Caliper.uuid(),
				academicTerm: 'SY2021-2022',
				scoreGiven: payload.scaledScore,
				extensions: payload,
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T12:00:00Z');
		model.object.id = Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771');
		model.generated.id = Caliper.uuid('e8d7d46e-edcf-40a1-b31d-b1461cb483c2');
		expect(model).toEqual(expected);
	});
});
