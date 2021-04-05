import {
	createInstructor,
	createLessonEventIndividualizedLearningPath,
	createLessonEventLesson,
	createLessonSkippedEvent,
	createStudent,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('LessonSkippedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/lesson-skipped/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'LessonEvent',
		action: 'Skipped',
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
			isPartOf: {
				id: 'https://app.edgenuity.com/ilp/12345',
				type: 'ILP',
				student: {
					id: 'https://foo.bar/user/10000',
					type: 'Student',
				},
			},
		},
	};

	it('OK', () => {
		const model = createLessonSkippedEvent({
			actor: createInstructor({ id: 'https://foo.bar/user/20000' }),
			object: createLessonEventLesson({
				id: 'https://app.edgenuity.com/lesson/12345',
				isPartOf: createLessonEventIndividualizedLearningPath({
					id: 'https://app.edgenuity.com/ilp/12345',
					student: createStudent({ id: 'https://foo.bar/user/10000' }),
				}),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T15:00:00Z');
		expect(model).toEqual(expected);
	});
});
