import {
	createDistrict,
	createOrganizationEventDistrict,
	createOrganizationEventOrganization,
	createOrganizationEventSchool,
	createOrganizationUpdatedEvent,
	createSystemIdentifier,
	createUser,
	Status,
	SystemIdentifierType,
} from '..';
import Caliper from '../../caliper';
import { validate } from '../../validate';

describe('OrganizationUpdatedEvent', () => {
	beforeAll(() => {
		Caliper.settings.applicationUri = 'https://app.edgenuity.com';
	});

	afterAll(() => {
		Caliper.settings.applicationUri = undefined;
	});

	const organizationEvent = {
		'@context': [
			'http://edgenuity.com/events/organization-updated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'OrganizationEvent',
		action: 'Modified',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:f41448d9-76e5-4171-8e0a-3e0e237a8581',
			type: 'User',
		},
		object: {
			id: 'urn:uuid:0fa3c515-38b5-4e77-aabf-30cde6bf2c8d',
			type: 'Organization',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			status: 'Active',
			name: 'My Organization',
			state: 'AZ',
			timezone: 'America/Phoenix',
			subOrganizationOf: {
				id: 'urn:uuid:e292faa7-9429-4323-8d67-c2e23ebb7c99',
				type: 'District',
			},
			otherIdentifiers: [
				{
					type: 'SystemIdentifier',
					identifier: 'https://ala.whatever.com/institution/9055',
					identifierType: 'SystemId',
					source: {
						id: 'https://ala.whatever.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'https://external.com/sis/12345',
					identifierType: 'SystemId',
					source: {
						id: 'https://external.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'https://nwea.org/fake-org/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					identifierType: 'SystemId',
					source: {
						id: 'https://nwea.org',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'ABC0005',
					identifierType: 'SystemId',
					source: {
						id: 'https://renaissance.com',
						type: 'SoftwareApplication',
					},
				},
			],
		},
	};

	it('OK', () => {
		const model = createOrganizationUpdatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createOrganizationEventOrganization({
				id: Caliper.uuid('0fa3c515-38b5-4e77-aabf-30cde6bf2c8d'),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				status: Status.Active,
				name: 'My Organization',
				state: 'AZ',
				timezone: 'America/Phoenix',
				subOrganizationOf: createDistrict({
					id: Caliper.uuid('e292faa7-9429-4323-8d67-c2e23ebb7c99'),
				}),
				otherIdentifiers: [
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://ala.whatever.com',
						identifier: 'https://ala.whatever.com/institution/9055',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://external.com',
						identifier: 'https://external.com/sis/12345',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://nwea.org',
						identifier: 'https://nwea.org/fake-org/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://renaissance.com',
						identifier: 'ABC0005',
					}),
				],
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(organizationEvent);
	});

	const schoolEvent = {
		'@context': [
			'http://edgenuity.com/events/organization-updated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'OrganizationEvent',
		action: 'Modified',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:f41448d9-76e5-4171-8e0a-3e0e237a8581',
			type: 'User',
		},
		object: {
			id: 'urn:uuid:0fa3c515-38b5-4e77-aabf-30cde6bf2c8d',
			type: 'School',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			status: 'Active',
			name: 'My School',
			state: 'AZ',
			timezone: 'America/Phoenix',
			subOrganizationOf: {
				id: 'urn:uuid:e292faa7-9429-4323-8d67-c2e23ebb7c99',
				type: 'District',
			},
			otherIdentifiers: [
				{
					type: 'SystemIdentifier',
					identifier: 'https://ala.whatever.com/institution/9055',
					identifierType: 'SystemId',
					source: {
						id: 'https://ala.whatever.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'https://external.com/sis/12345',
					identifierType: 'SystemId',
					source: {
						id: 'https://external.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'https://nwea.org/fake-org/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					identifierType: 'SystemId',
					source: {
						id: 'https://nwea.org',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'ABC0005',
					identifierType: 'SystemId',
					source: {
						id: 'https://renaissance.com',
						type: 'SoftwareApplication',
					},
				},
			],
		},
	};

	it('OK School', () => {
		const model = createOrganizationUpdatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createOrganizationEventSchool({
				id: Caliper.uuid('0fa3c515-38b5-4e77-aabf-30cde6bf2c8d'),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				status: Status.Active,
				name: 'My School',
				state: 'AZ',
				timezone: 'America/Phoenix',
				subOrganizationOf: createDistrict({
					id: Caliper.uuid('e292faa7-9429-4323-8d67-c2e23ebb7c99'),
				}),
				otherIdentifiers: [
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://ala.whatever.com',
						identifier: 'https://ala.whatever.com/institution/9055',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://external.com',
						identifier: 'https://external.com/sis/12345',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://nwea.org',
						identifier: 'https://nwea.org/fake-org/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://renaissance.com',
						identifier: 'ABC0005',
					}),
				],
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(schoolEvent);
	});

	const districtEvent = {
		'@context': [
			'http://edgenuity.com/events/organization-updated/0-0-2',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		id: 'urn:uuid:e251d4a0-b93c-4a0e-86cc-8b14c8db6787',
		type: 'OrganizationEvent',
		action: 'Modified',
		eventTime: '2020-09-22T15:00:00.000Z',
		edApp: {
			id: 'https://app.edgenuity.com',
			type: 'SoftwareApplication',
		},
		actor: {
			id: 'urn:uuid:f41448d9-76e5-4171-8e0a-3e0e237a8581',
			type: 'User',
		},
		object: {
			id: 'urn:uuid:0fa3c515-38b5-4e77-aabf-30cde6bf2c8d',
			type: 'District',
			dateCreated: '2020-09-22T12:00:00.000Z',
			dateModified: '2020-09-22T15:00:00.000Z',
			status: 'Active',
			name: 'My District',
			state: 'AZ',
			timezone: 'America/Phoenix',
			otherIdentifiers: [
				{
					type: 'SystemIdentifier',
					identifier: 'https://ala.whatever.com/institution/9055',
					identifierType: 'SystemId',
					source: {
						id: 'https://ala.whatever.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'https://external.com/sis/12345',
					identifierType: 'SystemId',
					source: {
						id: 'https://external.com',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'https://nwea.org/fake-org/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					identifierType: 'SystemId',
					source: {
						id: 'https://nwea.org',
						type: 'SoftwareApplication',
					},
				},
				{
					type: 'SystemIdentifier',
					identifier: 'ABC0005',
					identifierType: 'SystemId',
					source: {
						id: 'https://renaissance.com',
						type: 'SoftwareApplication',
					},
				},
			],
		},
	};

	it('OK District', () => {
		const model = createOrganizationUpdatedEvent({
			actor: createUser({ id: Caliper.uuid('f41448d9-76e5-4171-8e0a-3e0e237a8581') }),
			object: createOrganizationEventDistrict({
				id: Caliper.uuid('0fa3c515-38b5-4e77-aabf-30cde6bf2c8d'),
				dateCreated: Caliper.timestamp('2020-09-22T12:00:00Z'),
				dateModified: Caliper.timestamp('2020-09-22T15:00:00Z'),
				status: Status.Active,
				name: 'My District',
				state: 'AZ',
				timezone: 'America/Phoenix',
				otherIdentifiers: [
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://ala.whatever.com',
						identifier: 'https://ala.whatever.com/institution/9055',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://external.com',
						identifier: 'https://external.com/sis/12345',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://nwea.org',
						identifier: 'https://nwea.org/fake-org/8c9a5212-c91c-4904-a3e6-ba98aa7d640f',
					}),
					createSystemIdentifier({
						identifierType: SystemIdentifierType.SystemId,
						sourceUrl: 'https://renaissance.com',
						identifier: 'ABC0005',
					}),
				],
			}),
		});
		validate(model);

		model.id = Caliper.uuid('e251d4a0-b93c-4a0e-86cc-8b14c8db6787');
		model.eventTime = model.object.dateModified;
		expect(model).toEqual(districtEvent);
	});
});
