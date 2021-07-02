import { createIlpDeactivatedEvent, createSoftwareApplication } from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';
import { createIndividualizedLearningPath } from '../Entities/IndividualizedLearningPath';

describe('IlpDeactivatedEvemt', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://whatever.edu/mpng/ilp-sequencer';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const expected = {
		'@context': [
			'http://edgenuity.com/events/ilp-deactivated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'IlpEvent',
		action: 'Deactivated',
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
		},
	};

	it('OK', () => {
		const model = createIlpDeactivatedEvent({
			actor: createSoftwareApplication({ id: 'https://whatever.edu/mpng/ilp-sequencer' }),
			object: createIndividualizedLearningPath({ id: 'https://app.edgenuity.com/ilp/12345' }),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = Caliper.timestamp('2020-09-22T12:00:00Z');
		expect(model).toEqual(expected);
	});
});
