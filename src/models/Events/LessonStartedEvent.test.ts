import {
	createAttempt,
	createDomain,
	createLessonEventIndividualizedLearningPath,
	createLessonStartedEvent,
	createLessonStartedEventLesson,
	createStudent,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('LessonStartedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/lesson-started/0-1-0',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'LessonEvent',
		action: 'Started',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:6df6e776-b749-4a48-a421-eb2785d6a68a',
			type: 'Student',
		},
		object: {
			id: 'urn:pathid:12345#234',
			type: 'Lesson',
			language: 'English',
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
				id: 'urn:uuid:6ff6e776-b749-4a48-a421-eb2785d22a3a',
				type: 'ILP',
				student: {
					id: 'urn:uuid:6df6e776-b749-4a48-a421-eb2785d6a68a',
					type: 'Student',
				},
			},
		},
		generated: {
			type: 'Attempt',
			count: 1,
			id: 'urn:uuid:ee26e776-b749-4a48-a421-eb2785d22ff2',
		},
	};

	it('OK', () => {
		const student = createStudent({ id: Caliper.uuid('6df6e776-b749-4a48-a421-eb2785d6a68a') });
		const model = createLessonStartedEvent({
			actor: student,
			object: createLessonStartedEventLesson({
				id: 'urn:pathid:12345#234',
				language: 'English',
				isPartOf: createLessonEventIndividualizedLearningPath({
					id: Caliper.uuid('6ff6e776-b749-4a48-a421-eb2785d22a3a'),
					student,
				}),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				domain: createDomain({
					standard: 'ccss',
					code: 'nbt',
					name: 'Number & Operations in Base Ten',
				}),
			}),
			generated: createAttempt({
				id: Caliper.uuid('ee26e776-b749-4a48-a421-eb2785d22ff2'),
				count: 1,
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T15:00:00Z');
		expect(model).toEqual(expected);
	});
});
