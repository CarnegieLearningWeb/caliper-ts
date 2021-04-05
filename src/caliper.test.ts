import Caliper from './caliper';
import { EntityType } from './models/Entities/EntityType';

describe('Caliper module', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://unit.test';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	describe('Caliper.uuid', () => {
		it('Caliper.uuid OK', () => {
			const value = Caliper.uuid();
			expect(value).toMatch(/urn:uuid:\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/);
		});
	});

	describe('Caliper.urn', () => {
		const expected = 'urn:wne:guid_of_awesomeness';

		it('returns a properly formatted URN', () => {
			const urn = { nid: 'WNE', nss: 'GUID_OF_AWESOMENESS' };
			const actual = Caliper.urn(urn);
			expect(actual).toBe(expected);
		});

		it('returns properly formatted URN given arrays for `nid` and `nss`', () => {
			const urn = Caliper.urn({
				nid: ['WNE', 'IL'],
				nss: ['GUID_OF_AWESOMENESS', 'ANOTHER_IDENTIFIER'],
			});
			expect(urn).toBe('urn:wne:il:guid_of_awesomeness:another_identifier');
		});
	});

	describe('Caliper.edApp', () => {
		it('Caliper.edApp OK', () => {
			const model = {
				id: 'https://unit.test',
				type: EntityType.SoftwareApplication,
			};

			const value = Caliper.edApp();
			expect(value).toEqual(model);
		});

		it('returns null if no ID specified', () => {
			const value = Caliper.edApp({});
			expect(value).toBeNull();
		});
	});

	describe('Caliper.timestamp', () => {
		it('formats current timestamp if nothing specified', () => {
			const now = Date.parse('2021-03-15T00:00:00.000Z');
			jest.spyOn(Date, 'now').mockImplementation(() => now);
			const value = Caliper.timestamp();
			expect(value).toBe('2021-03-15T00:00:00.000Z');
			(Date.now as jest.Mock).mockRestore();
		});

		it('formats provided Date object', () => {
			const value = Caliper.timestamp(new Date('2021-03-15T12:00:00.000Z'));
			expect(value).toBe('2021-03-15T12:00:00.000Z');
		});

		it('formats provided date string', () => {
			const value = Caliper.timestamp('2021-03-15T12:00:00.000Z');
			expect(value).toBe('2021-03-15T12:00:00.000Z');
		});

		it('formats provided unix timestamp', () => {
			const now = Date.parse('2021-03-15T00:00:00.000Z');
			const value = Caliper.timestamp(now);
			expect(value).toBe('2021-03-15T00:00:00.000Z');
		});
	});

	describe('Caliper.duration', () => {
		const expectedDuration = 'P1DT14H58M';
		const durationRegex = /^P(?:\d+Y)?(?:\d+M)?(?:\d+D)?T?(?:\d+H)?(?:\d+M)?(?:\d+S)?/;

		it('returns the ISO8601 duration from two date objects', () => {
			const start = new Date('2020-07-20T02:56:00+0000');
			const end = new Date('2020-07-21T17:54:00+0000');

			const duration = Caliper.duration(start, end);
			expect(duration).toBe(expectedDuration);
			expect(duration).toMatch(durationRegex);
		});

		it('returns the ISO8601 duration from two string objects', () => {
			const start = '2000-07-20T02:56:00+0000';
			const end = '2000-07-21T17:54:00+0000';

			const duration = Caliper.duration(start, end);
			expect(duration).toBe(expectedDuration);
			expect(duration).toMatch(durationRegex);
		});
	});

	describe('Caliper.durationMilliseconds', () => {
		const durationRegex = /^P(?:\d+Y)?(?:\d+M)?(?:\d+D)?T?(?:\d+H)?(?:\d+M)?(?:\d+S)?/;
		const cases: [number, string][] = [
			[2500, 'PT2.5S'],
			[2041801, 'PT34M1.801S'],
			[86550000, 'P1DT2M30S'],
			[97350000, 'P1DT3H2M30S'],
		];

		test.each(cases)('%p => %p', (milliseconds, expected) => {
			const duration = Caliper.durationMilliseconds(milliseconds);
			expect(duration).toBe(expected);
			expect(duration).toMatch(durationRegex);
		});
	});
});
