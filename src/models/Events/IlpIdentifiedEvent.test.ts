import {
	createDomain,
	createIlpEventIndividualizedLearningPath,
	createIlpEventLesson,
	createIlpIdentifiedEvent,
	createSoftwareApplication,
	createStudent,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('IlpIdentifiedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://whatever.edu/mpng/ilp-sequencer';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/ilp-identified/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'IlpEvent',
		action: 'Identified',
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
			id: 'https://app.edgenuity.com/ilp/12345',
			type: 'ILP',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T12:00:00.000Z',
			state: 'Arizona',
			subject: 'Math',
			highestGradeLevel: 5,
			lowestPlacementGrade: 3,
			student: {
				id: 'https://foo.bar/user/6789',
				type: 'Student',
			},
			lessons: [
				{
					id: 'http://whatever.com/lesson/12187',
					type: 'Lesson',
					name: 'Add/Subtract Numbers (with Regrouping)',
					version: '31',
					gradeLevel: 3,
					domainOrder: 1,
					lessonOrder: 4,
					domain: {
						id: 'urn:domain:CCSS.NBT',
						code: 'nbt',
						standard: 'ccss',
						type: 'Domain',
						name: 'Number & Operations in Base Ten',
					},
				},
				{
					id: 'http://whatever.com/lesson/11852',
					type: 'Lesson',
					name: 'Find a Missing Number (Multiply)',
					version: '25',
					gradeLevel: 3,
					domainOrder: 2,
					lessonOrder: 9,
					domain: {
						id: 'urn:domain:CCSS.NBT',
						code: 'nbt',
						standard: 'ccss',
						type: 'Domain',
						name: 'Number & Operations in Base Ten',
					},
				},
				{
					id: 'http://whatever.com/lesson/40000',
					type: 'Lesson',
					name: 'Some unassigned lesson',
					version: '25',
					gradeLevel: 3,
					domainOrder: 2,
					lessonOrder: 9,
					domain: {
						id: 'urn:domain:CCSS.NBT',
						code: 'nbt',
						standard: 'ccss',
						type: 'Domain',
						name: 'Number & Operations in Base Ten',
					},
				},
				{
					id: 'http://whatever.com/lesson/40001',
					type: 'Lesson',
					name: 'Another unassigned lesson',
					version: '25',
					gradeLevel: 3,
					domainOrder: 2,
					lessonOrder: 9,
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
		const model = createIlpIdentifiedEvent({
			actor: createSoftwareApplication({ id: 'https://whatever.edu/mpng/ilp-sequencer' }),
			object: createIlpEventIndividualizedLearningPath({
				id: 'https://app.edgenuity.com/ilp/12345',
				student: createStudent({ id: 'https://foo.bar/user/6789' }),
				subject: 'Math',
				state: 'Arizona',
				highestGradeLevel: 5,
				lowestPlacementGrade: 3,
				lessons: [
					createIlpEventLesson({
						id: 'http://whatever.com/lesson/12187',
						gradeLevel: 3,
						domainOrder: 1,
						lessonOrder: 4,
						domain: createDomain({
							standard: 'ccss',
							code: 'nbt',
							name: 'Number & Operations in Base Ten',
						}),
						name: 'Add/Subtract Numbers (with Regrouping)',
						version: '31',
					}),
					createIlpEventLesson({
						id: 'http://whatever.com/lesson/11852',
						gradeLevel: 3,
						domainOrder: 2,
						lessonOrder: 9,
						domain: createDomain({
							standard: 'ccss',
							code: 'nbt',
							name: 'Number & Operations in Base Ten',
						}),
						name: 'Find a Missing Number (Multiply)',
						version: '25',
					}),
					createIlpEventLesson({
						id: 'http://whatever.com/lesson/40000',
						gradeLevel: 3,
						domainOrder: 2,
						lessonOrder: 9,
						domain: createDomain({
							standard: 'ccss',
							code: 'nbt',
							name: 'Number & Operations in Base Ten',
						}),
						name: 'Some unassigned lesson',
						version: '25',
					}),
					createIlpEventLesson({
						id: 'http://whatever.com/lesson/40001',
						gradeLevel: 3,
						domainOrder: 2,
						lessonOrder: 9,
						domain: createDomain({
							standard: 'ccss',
							code: 'nbt',
							name: 'Number & Operations in Base Ten',
						}),
						name: 'Another unassigned lesson',
						version: '25',
					}),
				],
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T12:00:00Z'),
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T12:00:00Z');
		expect(model).toEqual(expected);
	});
});
