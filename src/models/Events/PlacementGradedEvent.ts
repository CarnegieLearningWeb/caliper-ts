/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Agent } from '../Entities/Agent';
import { Assessment } from '../Entities/Assessment';
import { Attempt } from '../Entities/Attempt';
import { CourseOffering } from '../Entities/CourseOffering';
import { DigitalResource } from '../Entities/DigitalResource';
import { Entity } from '../Entities/Entity';
import { EntityType } from '../Entities/EntityType';
import { LearningObjective } from '../Entities/LearningObjective';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { PlacementScore } from '../Entities/PlacementScore';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { Status } from '../Entities/Status';
import { StudentProfileSettings } from '../Entities/StudentProfileSettings';
import { UserSession } from '../Entities/UserSession';
import { SystemIdentifier } from '../SystemIdentifier';
import {
	BenchmarkEventAttempt,
	BenchmarkEventScore,
	BenchmarkEventStudent,
} from './BenchmarkEvent';
import { CaliperAction } from './CaliperAction';
import { EventType } from './EventType';
import { PlacementEvent } from './Internals/PlacementEvent';
import { ProfileType } from './ProfileType';

export interface PlacementGradedEvent extends PlacementEvent {
	actor: SoftwareApplication;
	object: BenchmarkEventAttempt;
	generated: PlacementGradedEventPlacementScore | PlacementScore;
	referrer: SoftwareApplication;
	session?: Session | UserSession;
}

export interface PlacementGradedEventParams {
	actor: SoftwareApplication;
	object: BenchmarkEventAttempt;
	generated: PlacementGradedEventPlacementScore | PlacementScore;
	referrer: SoftwareApplication;
	session?: Session | UserSession;
	profile?: ProfileType;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	extensions?: Record<string, any>;
}

export function createPlacementGradedEvent(
	params: PlacementGradedEventParams,
	edApp?: SoftwareApplication
): PlacementGradedEvent {
	return {
		'@context': [
			'http://edgenuity.com/events/placement-graded/0-0-1',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		action: CaliperAction.Graded,
		type: EventType.PlacementEvent,
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}

export interface PlacementGradedEventPlacementScore extends BenchmarkEventScore {
	id: string;
	subject: string;
	scoreGiven: number;
	placementGrade: number;
	academicTerm: string;
	extensions: Record<string, any>;
}

export interface PlacementGradedEventPlacementScoreParams {
	id: string;
	subject: string;
	scoreGiven: number;
	placementGrade: number;
	academicTerm: string;
	extensions: Record<string, any>;
	attempt?: Attempt;
	maxScore?: number;
	comment?: string;
	scoredBy?: Agent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
}

export function createPlacementGradedEventPlacementScore(
	params: PlacementGradedEventPlacementScoreParams
): PlacementGradedEventPlacementScore {
	return {
		type: EntityType.PlacementScore,
		...params,
	};
}

export interface PlacementGradedEventAssessment extends Assessment {
	id: string;
	name: string;
	subject: string;
	isPartOf?: CourseOffering;
}

export interface PlacementGradedEventAssessmentParams {
	id: string;
	name: string;
	subject: string;
	isPartOf?: CourseOffering;
	items?: DigitalResource[];
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	learningObjectives?: LearningObjective[];
	keywords?: string[];
	creators?: Agent[];
	mediaType?: string;
	datePublished?: string;
	version?: string;
	storageName?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createPlacementGradedEventAssessment(
	params: PlacementGradedEventAssessmentParams
): PlacementGradedEventAssessment {
	return {
		type: EntityType.Assessment,
		...params,
	};
}

export interface PlacementGradedEventStudent extends BenchmarkEventStudent {
	id: string;
	gradeLevel: number;
	otherIdentifiers: SystemIdentifier[];
}

export interface PlacementGradedEventStudentParams {
	id: string;
	gradeLevel: number;
	otherIdentifiers: SystemIdentifier[];
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	settings?: StudentProfileSettings;
	name?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	status?: Status;
	extensions?: Record<string, any>;
}

export function createPlacementGradedEventStudent(
	params: PlacementGradedEventStudentParams
): PlacementGradedEventStudent {
	return {
		type: EntityType.Student,
		...params,
	};
}

export const PlacementGradedEventSchema = {
	context: 'http://edgenuity.com/events/placement-graded/0-0-1',
	schema: {
		title: 'PlacementGradedEvent',
		type: 'object',
		required: [
			'@context',
			'action',
			'actor',
			'object',
			'referrer',
			'type',
			'generated',
			'id',
			'eventTime',
			'edApp',
		],
		properties: {
			'@context': {
				type: 'array',
				items: [
					{
						type: 'string',
						default: 'http://edgenuity.com/events/placement-graded/0-0-1',
						enum: ['http://edgenuity.com/events/placement-graded/0-0-1'],
					},
					{
						type: 'string',
						default: 'http://purl.imsglobal.org/ctx/caliper/v1p2',
						enum: ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
					},
				],
			},
			action: {
				type: 'string',
				enum: ['Graded'],
			},
			actor: {
				title: 'SoftwareApplication',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'SoftwareApplication',
						$ref: '#/definitions/SoftwareApplication',
					},
				],
			},
			object: {
				title: 'Attempt',
				allOf: [
					{
						required: ['assignable', 'assignee', 'type', 'id'],
					},
					{
						title: 'Attempt',
						$ref: '#/definitions/Attempt',
					},
				],
			},
			referrer: {
				title: 'SoftwareApplication',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'SoftwareApplication',
						$ref: '#/definitions/SoftwareApplication',
					},
				],
			},
			type: {
				type: 'string',
				default: 'PlacementEvent',
				enum: ['PlacementEvent'],
			},
			generated: {
				title: 'PlacementScore',
				allOf: [
					{
						required: ['type', 'placementGrade', 'id'],
					},
					{
						title: 'PlacementScore',
						$ref: '#/definitions/PlacementScore',
					},
				],
			},
			id: {
				type: 'string',
				pattern: 'urn\\:uuid\\:\\w{8}-\\w{4}-\\w{4}-\\w{4}-\\w{12}',
			},
			eventTime: {
				type: 'string',
				pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
			},
			edApp: {
				title: 'SoftwareApplication',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'SoftwareApplication',
						$ref: '#/definitions/SoftwareApplication',
					},
				],
			},
			profile: {
				title: 'ProfileType',
				$ref: '#/definitions/ProfileType',
			},
			target: {
				title: 'Entity',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'Entity',
						$ref: '#/definitions/Entity',
					},
				],
			},
			group: {
				title: 'Organization',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'Organization',
						$ref: '#/definitions/Organization',
					},
				],
			},
			membership: {
				title: 'Membership',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'Membership',
						$ref: '#/definitions/Membership',
					},
				],
			},
			federatedSession: {
				title: 'LtiSession',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'LtiSession',
						$ref: '#/definitions/LtiSession',
					},
				],
			},
			session: {
				required: ['id', 'type'],
				oneOf: [
					{
						title: 'Session',
						$ref: '#/definitions/Session',
					},
					{
						title: 'UserSession',
						$ref: '#/definitions/UserSession',
					},
				],
			},
			extensions: {
				type: 'object',
				additionalProperties: true,
			},
		},
		definitions: {
			SoftwareApplication: {
				title: 'SoftwareApplication',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'SoftwareApplication',
						enum: ['SoftwareApplication'],
					},
					host: {
						type: 'string',
					},
					ipAddress: {
						title: 'IPAddress',
						$ref: '#/definitions/IPAddress',
					},
					userAgent: {
						type: 'string',
					},
					version: {
						type: 'string',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			IPAddress: {
				type: 'string',
				oneOf: [
					{
						pattern: '^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$',
					},
					{
						pattern: '^\\w{1,4}(:\\w{1,4}){7}$',
					},
				],
			},
			Uri: {
				type: 'string',
				oneOf: [
					{
						pattern: '^https?:\\/\\/\\w.+\\.\\w+[/\\w+]*',
					},
					{
						pattern: 'urn\\:.*',
					},
				],
			},
			SystemIdentifier: {
				title: 'SystemIdentifier',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'SystemIdentifier',
						enum: ['SystemIdentifier'],
					},
					identifierType: {
						title: 'SystemIdentifierType',
						$ref: '#/definitions/SystemIdentifierType',
					},
					identifier: {
						type: 'string',
					},
					source: {
						title: 'SoftwareApplication',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'SoftwareApplication',
								$ref: '#/definitions/SoftwareApplication',
							},
						],
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			SystemIdentifierType: {
				type: 'string',
				title: 'SystemIdentifierType',
				enum: [
					'AccountUserName',
					'EmailAddress',
					'LisSourcedId',
					'LtiContextId',
					'LtiDeploymentId',
					'LtiPlatformId',
					'LtiToolId',
					'LtiUserId',
					'OneRosterSourcedId',
					'Other',
					'SisSourcedId',
					'SystemId',
				],
			},
			Status: {
				type: 'string',
				title: 'Status',
				enum: ['Inactive', 'Active'],
			},
			Attempt: {
				title: 'Attempt',
				type: 'object',
				properties: {
					assignable: {
						title: 'Assessment',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Assessment',
								$ref: '#/definitions/Assessment',
							},
						],
					},
					assignee: {
						title: 'Student',
						allOf: [
							{
								required: ['otherIdentifiers', 'type', 'id'],
							},
							{
								title: 'Student',
								$ref: '#/definitions/Student',
							},
						],
					},
					type: {
						type: 'string',
						default: 'Attempt',
						enum: ['Attempt'],
					},
					count: {
						type: 'number',
					},
					startedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					endedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
					},
					isPartOf: {
						title: 'Attempt',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Attempt',
								$ref: '#/definitions/Attempt',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Assessment: {
				title: 'Assessment',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Assessment',
						enum: ['Assessment'],
					},
					items: {
						type: 'array',
						items: {
							title: 'DigitalResource',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'DigitalResource',
									$ref: '#/definitions/DigitalResource',
								},
							],
						},
					},
					dateToActivate: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateToShow: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateToStartOn: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateToSubmit: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					maxAttempts: {
						type: 'number',
					},
					maxSubmits: {
						type: 'number',
					},
					maxScore: {
						type: 'integer',
					},
					isPartOf: {
						title: 'CourseOffering',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'CourseOffering',
								$ref: '#/definitions/CourseOffering',
							},
						],
					},
					learningObjectives: {
						type: 'array',
						items: {
							title: 'LearningObjective',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'LearningObjective',
									$ref: '#/definitions/LearningObjective',
								},
							],
						},
					},
					keywords: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					creators: {
						type: 'array',
						items: {
							title: 'Agent',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'Agent',
									$ref: '#/definitions/Agent',
								},
							],
						},
					},
					mediaType: {
						type: 'string',
					},
					datePublished: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					version: {
						type: 'string',
					},
					storageName: {
						type: 'string',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			DigitalResource: {
				title: 'DigitalResource',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResource',
						enum: ['DigitalResource'],
					},
					learningObjectives: {
						type: 'array',
						items: {
							title: 'LearningObjective',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'LearningObjective',
									$ref: '#/definitions/LearningObjective',
								},
							],
						},
					},
					keywords: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					creators: {
						type: 'array',
						items: {
							title: 'Agent',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'Agent',
									$ref: '#/definitions/Agent',
								},
							],
						},
					},
					mediaType: {
						type: 'string',
					},
					isPartOf: {
						title: 'Entity',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Entity',
								$ref: '#/definitions/Entity',
							},
						],
					},
					datePublished: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					version: {
						type: 'string',
					},
					storageName: {
						type: 'string',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			LearningObjective: {
				title: 'LearningObjective',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'LearningObjective',
						enum: ['LearningObjective'],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Agent: {
				title: 'Agent',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Agent',
						enum: ['Agent'],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Entity: {
				title: 'Entity',
				type: 'object',
				properties: {
					type: {
						title: 'EntityType',
						$ref: '#/definitions/EntityType',
					},
					name: {
						type: 'string',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			EntityType: {
				type: 'string',
				title: 'EntityType',
				enum: [
					'Entity',
					'Agent',
					'AggregateMeasure',
					'AggregateMeasureCollection',
					'Annotation',
					'Assessment',
					'AssessmentItem',
					'AssignableDigitalResource',
					'Attempt',
					'AudioObject',
					'BookmarkAnnotation',
					'Chapter',
					'Collection',
					'Comment',
					'CourseOffering',
					'CourseSection',
					'DateTimeQuestion',
					'DateTimeResponse',
					'DigitalResource',
					'DigitalResourceCollection',
					'Document',
					'FillinBlankResponse',
					'Forum',
					'Frame',
					'Group',
					'HighlightAnnotation',
					'ImageObject',
					'LearningObjective',
					'LikertScale',
					'Link',
					'LtiLink',
					'LtiSession',
					'MediaLocation',
					'MediaObject',
					'Membership',
					'Message',
					'MultipleChoiceResponse',
					'MultipleResponseResponse',
					'MultiselectQuestion',
					'MultiselectResponse',
					'MultiselectScale',
					'NumericScale',
					'OpenEndedQuestion',
					'OpenEndedResponse',
					'Organization',
					'Page',
					'Person',
					'Query',
					'Question',
					'Questionnaire',
					'QuestionnaireItem',
					'Rating',
					'RatingScaleQuestion',
					'RatingScaleResponse',
					'Response',
					'Result',
					'Scale',
					'Score',
					'SearchResponse',
					'SelectTextResponse',
					'Session',
					'SharedAnnotation',
					'SoftwareApplication',
					'Survey',
					'SurveyInvitation',
					'TagAnnotation',
					'Thread',
					'TrueFalseResponse',
					'VideoObject',
					'WebPage',
					'User',
					'Student',
					'Instructor',
					'School',
					'District',
					'Class',
					'ILP',
					'Lesson',
					'Award',
					'MasteryScore',
					'PlacementTest',
					'PlacementScore',
					'UserSession',
					'EducationStandard',
					'Domain',
					'Configuration',
				],
			},
			CourseOffering: {
				title: 'CourseOffering',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'CourseOffering',
						enum: ['CourseOffering'],
					},
					courseNumber: {
						type: 'string',
					},
					academicSession: {
						type: 'string',
					},
					subOrganizationOf: {
						title: 'Organization',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Organization',
								$ref: '#/definitions/Organization',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Organization: {
				title: 'Organization',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Organization',
						enum: ['Organization'],
					},
					subOrganizationOf: {
						title: 'Organization',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Organization',
								$ref: '#/definitions/Organization',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Student: {
				title: 'Student',
				type: 'object',
				properties: {
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					type: {
						type: 'string',
						default: 'Student',
						enum: ['Student'],
					},
					gradeLevel: {
						type: 'number',
					},
					individualEducationPlan: {
						type: 'boolean',
					},
					englishLanguageLearner: {
						type: 'boolean',
					},
					settings: {
						type: 'object',
						additionalProperties: true,
						properties: {
							spanishLanguage: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							textToSpeech: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							languageTranslationTools: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					email: {
						type: 'string',
						pattern: '^[\\w._%+-]+@[\\w.-]+\\.\\w+',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			PlacementScore: {
				title: 'PlacementScore',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'PlacementScore',
						enum: ['PlacementScore'],
					},
					placementGrade: {
						type: 'number',
					},
					attempt: {
						title: 'Attempt',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Attempt',
								$ref: '#/definitions/Attempt',
							},
						],
					},
					maxScore: {
						type: 'integer',
					},
					scoreGiven: {
						type: 'integer',
					},
					comment: {
						type: 'string',
					},
					scoredBy: {
						title: 'Agent',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Agent',
								$ref: '#/definitions/Agent',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			ProfileType: {
				type: 'string',
				title: 'ProfileType',
				enum: [
					'AnnotationProfile',
					'AssessmentProfile',
					'AssignableProfile',
					'FeedbackProfile',
					'ForumProfile',
					'GradingProfile',
					'MediaProfile',
					'ReadingProfile',
					'ResourceManagementProfile',
					'SearchProfile',
					'SessionProfile',
					'SurveyProfile',
					'ToolLaunchProfile',
					'ToolUseProfile',
					'GeneralProfile',
				],
			},
			Membership: {
				title: 'Membership',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Membership',
						enum: ['Membership'],
					},
					member: {
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'Person',
								$ref: '#/definitions/Person',
							},
							{
								title: 'User',
								$ref: '#/definitions/User',
							},
							{
								title: 'Instructor',
								$ref: '#/definitions/Instructor',
							},
							{
								title: 'Student',
								$ref: '#/definitions/Student',
							},
						],
					},
					organization: {
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'Organization',
								$ref: '#/definitions/Organization',
							},
							{
								title: 'School',
								$ref: '#/definitions/School',
							},
							{
								title: 'Group',
								$ref: '#/definitions/Group',
							},
							{
								title: 'Class',
								$ref: '#/definitions/Class',
							},
						],
					},
					roles: {
						type: 'array',
						items: {
							title: 'Role',
							$ref: '#/definitions/Role',
						},
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Person: {
				title: 'Person',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Person',
						enum: ['Person'],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			User: {
				title: 'User',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'User',
						enum: ['User'],
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					email: {
						type: 'string',
						pattern: '^[\\w._%+-]+@[\\w.-]+\\.\\w+',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Instructor: {
				title: 'Instructor',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Instructor',
						enum: ['Instructor'],
					},
					permissions: {
						type: 'object',
						additionalProperties: true,
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					email: {
						type: 'string',
						pattern: '^[\\w._%+-]+@[\\w.-]+\\.\\w+',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			School: {
				title: 'School',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'School',
						enum: ['School'],
					},
					subOrganizationOf: {
						title: 'Organization',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Organization',
								$ref: '#/definitions/Organization',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Group: {
				title: 'Group',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Group',
						enum: ['Group'],
					},
					subjects: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					subOrganizationOf: {
						title: 'Organization',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Organization',
								$ref: '#/definitions/Organization',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Class: {
				title: 'Class',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Class',
						enum: ['Class'],
					},
					academicTerm: {
						type: 'string',
					},
					subjects: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					subOrganizationOf: {
						title: 'Organization',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Organization',
								$ref: '#/definitions/Organization',
							},
						],
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Role: {
				title: 'Role',
				type: 'string',
				enum: [
					'Learner',
					'Learner#Learner',
					'Learner#ExternalLearner',
					'Learner#GuestLearner',
					'Learner#NonCreditLearner',
					'Instructor',
					'Instructor#Instructor',
					'Instructor#Grader',
					'Instructor#ExternalInstructor',
					'Instructor#GuestInstructor',
					'Instructor#Lecturer',
					'Instructor#PrimaryInstructor',
					'Instructor#SecondaryInstructor',
					'Instructor#TeachingAssistant',
					'Instructor#TeachingAssistantGroup',
					'Instructor#TeachingAssistantSection',
					'Instructor#TeachingAssistantOffering',
					'Instructor#TeachingAssistantTemplate',
					'Administrator',
					'Administrator#Administrator',
					'Administrator#Developer',
					'Administrator#Support',
					'Administrator#SystemAdministrator',
					'Administrator#ExternalDeveloper',
					'Administrator#ExternalSupport',
					'Administrator#ExternalSystemAdministrator',
					'ContentDeveloper',
					'ContentDeveloper#ContentDeveloper',
					'ContentDeveloper#Librarian',
					'ContentDeveloper#ContentExpert',
					'ContentDeveloper#ExternalContentExpert',
					'Manager',
					'Manager#Manager',
					'Manager#AreaManager',
					'Manager#CourseCoordinator',
					'Manager#Observer',
					'Manager#ExternalObserver',
					'Member',
					'Member#Member',
					'Mentor',
					'Mentor#Mentor',
					'Mentor#Advisor',
					'Mentor#Auditor',
					'Mentor#Reviewer',
					'Mentor#Tutor',
					'Mentor#LearningFacilitator',
					'Mentor#ExternalMentor',
					'Mentor#ExternalAdvisor',
					'Mentor#ExternalAuditor',
					'Mentor#ExternalReviewer',
					'Mentor#ExternalTutor',
					'Mentor#ExternalLearningFacilitator',
					'Officer',
					'Officer#Officer',
					'Officer#Chair',
					'Officer#Secretary',
					'Officer#Treasurer',
					'Officer#Vice-Chair',
				],
			},
			LtiSession: {
				title: 'LtiSession',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'LtiSession',
						enum: ['LtiSession'],
					},
					messageParameters: {
						type: 'object',
						additionalProperties: true,
					},
					user: {
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'Person',
								$ref: '#/definitions/Person',
							},
							{
								title: 'User',
								$ref: '#/definitions/User',
							},
							{
								title: 'Instructor',
								$ref: '#/definitions/Instructor',
							},
							{
								title: 'Student',
								$ref: '#/definitions/Student',
							},
						],
					},
					client: {
						title: 'SoftwareApplication',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'SoftwareApplication',
								$ref: '#/definitions/SoftwareApplication',
							},
						],
					},
					startedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					endedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			Session: {
				title: 'Session',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Session',
						enum: ['Session'],
					},
					user: {
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'Person',
								$ref: '#/definitions/Person',
							},
							{
								title: 'User',
								$ref: '#/definitions/User',
							},
							{
								title: 'Instructor',
								$ref: '#/definitions/Instructor',
							},
							{
								title: 'Student',
								$ref: '#/definitions/Student',
							},
						],
					},
					client: {
						title: 'SoftwareApplication',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'SoftwareApplication',
								$ref: '#/definitions/SoftwareApplication',
							},
						],
					},
					startedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					endedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			UserSession: {
				title: 'UserSession',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'UserSession',
						enum: ['UserSession'],
					},
					user: {
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'User',
								$ref: '#/definitions/User',
							},
							{
								title: 'Instructor',
								$ref: '#/definitions/Instructor',
							},
							{
								title: 'Student',
								$ref: '#/definitions/Student',
							},
						],
					},
					client: {
						title: 'SoftwareApplication',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'SoftwareApplication',
								$ref: '#/definitions/SoftwareApplication',
							},
						],
					},
					login: {
						title: 'AuthorizationClaims',
						$ref: '#/definitions/AuthorizationClaims',
					},
					startedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					endedAtTime: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
					},
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					name: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					dateCreated: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					dateModified: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					otherIdentifiers: {
						type: 'array',
						items: {
							title: 'SystemIdentifier',
							allOf: [
								{
									required: ['type', 'identifierType', 'identifier', 'source'],
								},
								{
									title: 'SystemIdentifier',
									$ref: '#/definitions/SystemIdentifier',
								},
							],
						},
					},
					status: {
						title: 'Status',
						$ref: '#/definitions/Status',
					},
					extensions: {
						type: 'object',
						additionalProperties: true,
					},
				},
			},
			AuthorizationClaims: {
				title: 'AuthorizationClaims',
				type: 'object',
				properties: {
					localTimestamp: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?[-|\\+]\\d{2}:\\d{2}$',
					},
					loginType: {
						title: 'LoginType',
						$ref: '#/definitions/LoginType',
					},
					credentialTypes: {
						type: 'array',
						items: {
							title: 'CredentialType',
							$ref: '#/definitions/CredentialType',
						},
					},
					scopes: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
			LoginType: {
				type: 'string',
				title: 'LoginType',
				enum: [
					'QRCodeSwipeFromALA',
					'SAML',
					'CleverApi',
					'LtiSSO',
					'GoogleAuthentication',
					'ApplicationLoginPage',
					'Impersonation',
				],
			},
			CredentialType: {
				type: 'string',
				title: 'CredentialType',
				enum: ['Username', 'Password', 'QRCode'],
			},
		},
	},
};