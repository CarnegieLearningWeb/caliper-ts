import {
	createDomain,
	createInstructor,
	createLessonEventIndividualizedLearningPath,
	createLessonEventLesson,
	createLessonEventMasteryScore,
	createLessonGradedEvent,
	createStudent,
	LessonStatus,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('LessonGradedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/lesson-graded/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'LessonEvent',
		action: 'Graded',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'https://foo.bar/user/20000',
			type: 'Instructor',
		},
		object: {
			id: 'https://app.edgenuity.com/lesson/12345',
			type: 'Lesson',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			domain: {
				id: 'urn:domain:CCSS.NBT',
				code: 'nbt',
				standard: 'ccss',
				type: 'Domain',
				name: 'Number & Operations in Base Ten',
			},
			isPartOf: {
				id: 'https://app.edgenuity.com/ilp/12345',
				type: 'ILP',
				student: {
					id: 'https://foo.bar/user/10000',
					type: 'Student',
				},
			},
		},
		generated: {
			id: 'https://app.edgenuity.com/lesson/12345/score',
			type: 'MasteryScore',
			maxScore: 100.0,
			scoreGiven: 90.0,
			passThreshold: 50.0,
			lessonStatus: 'Passed',
		},
	};

	it('OK', () => {
		const model = createLessonGradedEvent({
			actor: createInstructor({ id: 'https://foo.bar/user/20000' }),
			object: createLessonEventLesson({
				id: 'https://app.edgenuity.com/lesson/12345',
				isPartOf: createLessonEventIndividualizedLearningPath({
					id: 'https://app.edgenuity.com/ilp/12345',
					student: createStudent({ id: 'https://foo.bar/user/10000' }),
				}),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				domain: createDomain({
					standard: 'ccss',
					code: 'nbt',
					name: 'Number & Operations in Base Ten',
				}),
			}),
			generated: createLessonEventMasteryScore({
				id: 'https://app.edgenuity.com/lesson/12345/score',
				maxScore: 100,
				scoreGiven: 90,
				passThreshold: 50,
				lessonStatus: LessonStatus.Passed,
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T15:00:00Z');
		expect(model).toEqual(expected);
	});
});
