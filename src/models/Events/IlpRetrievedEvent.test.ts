import {
	createDomain,
	createIlpEventIndividualizedLearningPath,
	createIlpEventLesson,
	createIlpRetrievedEvent,
	createSoftwareApplication,
	createStudent,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('IlpRetrievedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://whatever.edu/mpng/ilp-sequencer';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/ilp-retrieved/0-0-3',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'IlpEvent',
		action: 'Retrieved',
		eventTime: '2020-09-22T12:00:00.000Z',
		edApp: {
			id: 'https://whatever.edu/mpng/ilp-sequencer',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'https://whatever.edu/mpng/ilp-sequencer',
			type: 'SoftwareApplication',
		},
		object: {
			id: 'urn:uuid:6ff6e776-b749-4a48-a421-eb2785d22a3a',
			type: 'ILP',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T12:00:00.000Z',
			state: 'Arizona',
			subject: 'Math',
			highestGradeLevel: 5,
			lowestPlacementGrade: 3,
			student: {
				id: 'urn:uuid:6df6e776-b749-4a48-a421-eb2785d6a68a',
				type: 'Student',
			},
			academicSessionId: 'https://whatever.edu/mpng/academic-session-id',
			placementId: 'https://whatever.edu/mpng/placement-id',
			schoolYear: 0,
			lessons: [
				{
					id: 'urn:pathid:12345#234',
					type: 'Lesson',
					name: 'Add/Subtract Numbers (with Regrouping)',
					version: '234',
					gradeLevel: 3,
					domainOrder: 1,
					lessonOrder: 4,
					isAssigned: true,
					domain: {
						id: 'urn:domain:CCSS.NBT',
						code: 'nbt',
						standard: 'ccss',
						type: 'Domain',
						name: 'Number & Operations in Base Ten',
					},
				},
				{
					id: 'urn:pathid:12350#255',
					type: 'Lesson',
					name: 'Find a Missing Number (Multiply)',
					version: '255',
					gradeLevel: 3,
					domainOrder: 2,
					lessonOrder: 9,
					isAssigned: true,
					domain: {
						id: 'urn:domain:CCSS.NBT',
						code: 'nbt',
						standard: 'ccss',
						type: 'Domain',
						name: 'Number & Operations in Base Ten',
					},
				},
			],
		},
	};

	it('OK', () => {
		const model = createIlpRetrievedEvent({
			actor: createSoftwareApplication({ id: 'https://whatever.edu/mpng/ilp-sequencer' }),
			object: createIlpEventIndividualizedLearningPath({
				id: Caliper.uuid('6ff6e776-b749-4a48-a421-eb2785d22a3a'),
				student: createStudent({ id: Caliper.uuid('6df6e776-b749-4a48-a421-eb2785d6a68a') }),
				subject: 'Math',
				state: 'Arizona',
				highestGradeLevel: 5,
				lowestPlacementGrade: 3,
				lessons: [
					createIlpEventLesson({
						id: 'urn:pathid:12345#234',
						gradeLevel: 3,
						domainOrder: 1,
						lessonOrder: 4,
						domain: createDomain({
							standard: 'ccss',
							code: 'nbt',
							name: 'Number & Operations in Base Ten',
						}),
						isAssigned: true,
						name: 'Add/Subtract Numbers (with Regrouping)',
						version: '234',
					}),
					createIlpEventLesson({
						id: 'urn:pathid:12350#255',
						gradeLevel: 3,
						domainOrder: 2,
						lessonOrder: 9,
						domain: createDomain({
							standard: 'ccss',
							code: 'nbt',
							name: 'Number & Operations in Base Ten',
						}),
						isAssigned: true,
						name: 'Find a Missing Number (Multiply)',
						version: '255',
					}),
				],
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T12:00:00Z'),
				academicSessionId: 'https://whatever.edu/mpng/academic-session-id',
				placementId: 'https://whatever.edu/mpng/placement-id',
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T12:00:00Z');
		expect(model).toEqual(expected);
	});
});
