import {
	createBenchmarkEventAssessment,
	createBenchmarkEventAttempt,
	createBenchmarkEventScore,
	createBenchmarkEventStudent,
	createNWEABenchmarkEvent,
	createSoftwareApplication,
	createSystemIdentifier,
	SystemIdentifierType,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('NWEABenchmarkEvent', () => {
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
			id: 'https://nwea.com',
			type: 'SoftwareApplication',
		},
		object: {
			id: 'urn:uuid:af4e81c0-c0a9-4365-8254-c277baa08771',
			type: 'Attempt',
			dateCreated: '2020-12-07T14:17:16Z',
			duration: 'PT34M1.801S',
			assignable: {
				id: 'urn:test:nwea:MAP2-2780',
				type: 'Assessment',
				subject: 'Reading',
				name: 'Growth: Reading 2-5 GA 2015',
			},
			assignee: {
				id: 'urn:uuid:ec3b84f0-ca55-4b0d-8ffd-4b1cdf5ab9ae',
				type: 'Student',
				gradeLevel: 3,
				otherIdentifiers: [
					{
						type: 'SystemIdentifier',
						identifierType: 'SystemId',
						identifier: '0e66141d-b592-4110-810f-ba4193530ce7',
						source: {
							type: 'SoftwareApplication',
							id: 'https://nwea.com',
						},
					},
				],
			},
		},
		generated: {
			id: 'urn:uuid:a6732943-3a9f-4366-863e-d1b920fb68e2',
			type: 'Score',
			academicTerm: 'SY2021-2022',
			dateCreated: '0001-01-01T00:00:00Z',
			scoreGiven: 200.0,
			extensions: {
				eventDate: '0001-01-01T00:00:00',
				testResultBid: 'a6732943-3a9f-4366-863e-d1b920fb68e2',
				testName: 'Growth: Reading 2-5 GA 2015',
				testKey: 'MAP2-2780',
				testDate: '2020-12-07T14:17:16',
				studentBid: '0e66141d-b592-4110-810f-ba4193530ce7',
				studentId: '2043921952',
				schoolBid: 'c73db122-4506-4eba-ab7f-354d605c082c',
				districtBid: '51a5c37b-7458-4b61-9472-48568ff15eda',
				subject: 'Reading',
				duration: 2041801,
				status: 'COMPLETED',
				growthEventYn: true,
				rit: '200',
				standardError: '3.3',
				ritScoreHigh: '203',
				ritScoreLow: '197',
				responseDisengagedPercentage: 0.0,
				impactOfDisengagement: 0.0,
				grade: '3',
				gradeCustom: '3',
				term: {
					termName: 'Winter 2020-2021',
					termBid: '9fa9a1d8-c7ab-11ea-ab18-005056935f42',
					iweek: 20,
					termSeq: '8084',
					season: 1,
				},
				items: {
					shown: 40,
					correct: 22,
					total: 40,
				},
				instructionalAreas: [
					{
						instructionalAreaBid: 106275,
						instructionalAreaName: 'Informational Text',
						score: 197,
						standardError: 5.7,
						scoreHigh: 202.7,
						scoreLow: 191.3,
						items: {
							shown: 13,
							correct: 6,
							total: 13,
						},
					},
					{
						instructionalAreaBid: 106276,
						instructionalAreaName: 'Literature',
						score: 191,
						standardError: 5.9,
						scoreHigh: 196.9,
						scoreLow: 185.1,
						items: {
							shown: 13,
							correct: 5,
							total: 13,
						},
					},
					{
						instructionalAreaBid: 106277,
						instructionalAreaName: 'Vocabulary Acquisition and Use',
						score: 211,
						standardError: 6.6,
						scoreHigh: 217.6,
						scoreLow: 204.4,
						items: {
							shown: 14,
							correct: 11,
							total: 14,
						},
					},
				],
				lexile: {
					score: '690L',
					min: '590L',
					max: '740L',
					range: '590L-740L',
				},
				norms: [
					{
						percentile: 65.0,
						reference: '2020',
						type: 'achievement',
					},
				],
			},
		},
	};

	it('OK', () => {
		const payload = {
			eventDate: '0001-01-01T00:00:00',
			testResultBid: 'a6732943-3a9f-4366-863e-d1b920fb68e2',
			testName: 'Growth: Reading 2-5 GA 2015',
			testKey: 'MAP2-2780',
			testDate: '2020-12-07T14:17:16',
			studentBid: '0e66141d-b592-4110-810f-ba4193530ce7',
			studentId: '2043921952',
			schoolBid: 'c73db122-4506-4eba-ab7f-354d605c082c',
			districtBid: '51a5c37b-7458-4b61-9472-48568ff15eda',
			subject: 'Reading',
			duration: 2041801,
			status: 'COMPLETED',
			growthEventYn: true,
			rit: '200',
			standardError: '3.3',
			ritScoreHigh: '203',
			ritScoreLow: '197',
			responseDisengagedPercentage: 0.0,
			impactOfDisengagement: 0.0,
			grade: '3',
			gradeCustom: '3',
			term: {
				termName: 'Winter 2020-2021',
				termBid: '9fa9a1d8-c7ab-11ea-ab18-005056935f42',
				iweek: 20,
				termSeq: '8084',
				season: 1,
			},
			items: {
				shown: 40,
				correct: 22,
				total: 40,
			},
			instructionalAreas: [
				{
					instructionalAreaBid: 106275,
					instructionalAreaName: 'Informational Text',
					score: 197,
					standardError: 5.7,
					scoreHigh: 202.7,
					scoreLow: 191.3,
					items: {
						shown: 13,
						correct: 6,
						total: 13,
					},
				},
				{
					instructionalAreaBid: 106276,
					instructionalAreaName: 'Literature',
					score: 191,
					standardError: 5.9,
					scoreHigh: 196.9,
					scoreLow: 185.1,
					items: {
						shown: 13,
						correct: 5,
						total: 13,
					},
				},
				{
					instructionalAreaBid: 106277,
					instructionalAreaName: 'Vocabulary Acquisition and Use',
					score: 211,
					standardError: 6.6,
					scoreHigh: 217.6,
					scoreLow: 204.4,
					items: {
						shown: 14,
						correct: 11,
						total: 14,
					},
				},
			],
			lexile: {
				score: '690L',
				min: '590L',
				max: '740L',
				range: '590L-740L',
			},
			norms: [
				{
					percentile: 65.0,
					reference: '2020',
					type: 'achievement',
				},
			],
		};

		// Events should only utilize known WNE IDs, not external IDs
		const wneSubject = 'Reading';
		const wneStudent = {
			Id: 'ec3b84f0-ca55-4b0d-8ffd-4b1cdf5ab9ae',
			GradeLevel: 5,
		};

		const model = createNWEABenchmarkEvent({
			actor: createSoftwareApplication({ id: 'https://nwea.com' }),
			object: createBenchmarkEventAttempt({
				id: Caliper.uuid(),
				dateCreated: `${payload.testDate}Z`,
				assignable: createBenchmarkEventAssessment({
					id: `urn:test:nwea:${payload.testKey}`,
					subject: wneSubject,
					name: payload.testName,
				}),
				assignee: createBenchmarkEventStudent({
					id: Caliper.uuid(wneStudent.Id),
					gradeLevel: parseInt(payload.grade, 10),
					otherIdentifiers: [
						createSystemIdentifier({
							identifierType: SystemIdentifierType.SystemId,
							sourceUrl: 'https://nwea.com',
							identifier: payload.studentBid,
						}),
					],
				}),
				duration: Caliper.durationMilliseconds(payload.duration),
			}),
			generated: createBenchmarkEventScore({
				id: Caliper.uuid(payload.testResultBid),
				academicTerm: 'SY2021-2022',
				scoreGiven: parseInt(payload.rit, 10),
				extensions: payload,
				dateCreated: `${payload.eventDate}Z`,
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T12:00:00Z');
		model.object.id = Caliper.uuid('af4e81c0-c0a9-4365-8254-c277baa08771');
		expect(model).toEqual(expected);
	});
});
