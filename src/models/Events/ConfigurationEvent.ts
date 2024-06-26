/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Configuration } from '../Entities/Configuration';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { Event } from './Event';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface ConfigurationEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: Configuration;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface ConfigurationEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: Configuration;
	action?: CaliperAction;
	session?: Session | UserSession;
	profile?: ProfileType;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createConfigurationEvent(
	params: ConfigurationEventParams,
	edApp?: SoftwareApplication
): ConfigurationEvent {
	return {
		'@context': [
			'http://edgenuity.com/events/configuration/0-0-1',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		type: EventType.ConfigurationEvent,
		action: CaliperAction.None,
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}

export const ConfigurationEventSchema = {
	context: 'http://edgenuity.com/events/configuration/0-0-1',
	schema: {
		title: 'ConfigurationEvent',
		type: 'object',
		required: ['@context', 'type', 'action', 'object', 'id', 'eventTime', 'edApp', 'actor'],
		properties: {
			'@context': {
				type: 'array',
				items: [
					{
						type: 'string',
						default: 'http://edgenuity.com/events/configuration/0-0-1',
						enum: ['http://edgenuity.com/events/configuration/0-0-1'],
					},
					{
						type: 'string',
						default: 'http://purl.imsglobal.org/ctx/caliper/v1p2',
						enum: ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
					},
				],
			},
			type: {
				type: 'string',
				default: 'ConfigurationEvent',
				enum: ['ConfigurationEvent'],
			},
			action: {
				type: 'string',
				enum: ['Created', 'Modified'],
			},
			object: {
				title: 'Configuration',
				allOf: [
					{
						required: ['type', 'id'],
					},
					{
						title: 'Configuration',
						$ref: '#/definitions/Configuration',
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
			actor: {
				oneOf: [
					{
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
					{
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
					{
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
							preferredName: {
								type: 'string',
							},
							accountManager: {
								type: 'string',
							},
							professionalDevSpecialist: {
								type: 'string',
							},
							externalSalesRep: {
								type: 'string',
							},
							insideSalesRep: {
								type: 'string',
							},
							territory: {
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
			generated: {
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
			referrer: {
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
			extensions: {
				type: 'object',
				additionalProperties: true,
			},
		},
		definitions: {
			Configuration: {
				title: 'Configuration',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Configuration',
						enum: ['Configuration'],
					},
					serviceToConfigure: {
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
					configurationData: {
						title: 'ConfigurationData',
						$ref: '#/definitions/ConfigurationData',
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
			ConfigurationData: {
				title: 'ConfigurationData',
				type: 'object',
				properties: {
					id: {
						title: 'Uri',
						$ref: '#/definitions/Uri',
					},
					type: {
						type: 'string',
					},
					formatVersion: {
						type: 'string',
					},
					dataVersion: {
						type: 'string',
					},
					dataObject: {
						title: 'Object',
						$ref: '#/definitions/Object',
					},
				},
			},
			Object: {
				title: 'Object',
				type: 'object',
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
			Entity: {
				title: 'Entity',
				type: 'object',
				properties: {
					type: {
						title: 'EntityType',
						$ref: '#/definitions/EntityType',
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
					'Placement',
				],
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
					preferredName: {
						type: 'string',
					},
					accountManager: {
						type: 'string',
					},
					professionalDevSpecialist: {
						type: 'string',
					},
					externalSalesRep: {
						type: 'string',
					},
					insideSalesRep: {
						type: 'string',
					},
					territory: {
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
			Student: {
				title: 'Student',
				type: 'object',
				properties: {
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
					state: {
						type: 'string',
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
					preferredName: {
						type: 'string',
					},
					accountManager: {
						type: 'string',
					},
					professionalDevSpecialist: {
						type: 'string',
					},
					externalSalesRep: {
						type: 'string',
					},
					insideSalesRep: {
						type: 'string',
					},
					territory: {
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
					preferredName: {
						type: 'string',
					},
					accountManager: {
						type: 'string',
					},
					professionalDevSpecialist: {
						type: 'string',
					},
					externalSalesRep: {
						type: 'string',
					},
					insideSalesRep: {
						type: 'string',
					},
					territory: {
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
					preferredName: {
						type: 'string',
					},
					accountManager: {
						type: 'string',
					},
					professionalDevSpecialist: {
						type: 'string',
					},
					externalSalesRep: {
						type: 'string',
					},
					insideSalesRep: {
						type: 'string',
					},
					territory: {
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
