/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Assessment } from '../Entities/Assessment';
import { AssessmentItem } from '../Entities/AssessmentItem';
import { AssignableDigitalResource } from '../Entities/AssignableDigitalResource';
import { AudioObject } from '../Entities/AudioObject';
import { Chapter } from '../Entities/Chapter';
import { DigitalResource } from '../Entities/DigitalResource';
import { DigitalResourceCollection } from '../Entities/DigitalResourceCollection';
import { Document } from '../Entities/Document';
import { Entity } from '../Entities/Entity';
import { Forum } from '../Entities/Forum';
import { Frame } from '../Entities/Frame';
import { ImageObject } from '../Entities/ImageObject';
import { Instructor } from '../Entities/Instructor';
import { LtiLink } from '../Entities/LtiLink';
import { LtiSession } from '../Entities/LtiSession';
import { MediaLocation } from '../Entities/MediaLocation';
import { MediaObject } from '../Entities/MediaObject';
import { Membership } from '../Entities/Membership';
import { Message } from '../Entities/Message';
import { Organization } from '../Entities/Organization';
import { Page } from '../Entities/Page';
import { Questionnaire } from '../Entities/Questionnaire';
import { QuestionnaireItem } from '../Entities/QuestionnaireItem';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { Student } from '../Entities/Student';
import { SurveyInvitation } from '../Entities/SurveyInvitation';
import { Thread } from '../Entities/Thread';
import { User } from '../Entities/User';
import { UserSession } from '../Entities/UserSession';
import { VideoObject } from '../Entities/VideoObject';
import { WebPage } from '../Entities/WebPage';
import { CaliperAction } from './CaliperAction';
import { Event } from './Event';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface NavigationEvent extends Event {
	actor: User | Student | Instructor;
	object:
		| DigitalResource
		| SoftwareApplication
		| AudioObject
		| Assessment
		| AssessmentItem
		| AssignableDigitalResource
		| Chapter
		| DigitalResourceCollection
		| Document
		| Forum
		| Frame
		| ImageObject
		| LtiLink
		| MediaLocation
		| MediaObject
		| Message
		| Page
		| Questionnaire
		| QuestionnaireItem
		| SurveyInvitation
		| Thread
		| VideoObject
		| WebPage;
	target?:
		| DigitalResource
		| AudioObject
		| Assessment
		| AssessmentItem
		| AssignableDigitalResource
		| Chapter
		| DigitalResourceCollection
		| Document
		| Forum
		| Frame
		| ImageObject
		| LtiLink
		| MediaLocation
		| MediaObject
		| Message
		| Page
		| Questionnaire
		| QuestionnaireItem
		| SurveyInvitation
		| Thread
		| VideoObject
		| WebPage;
	referrer?:
		| DigitalResource
		| AudioObject
		| Assessment
		| AssessmentItem
		| AssignableDigitalResource
		| Chapter
		| DigitalResourceCollection
		| Document
		| Forum
		| Frame
		| ImageObject
		| LtiLink
		| MediaLocation
		| MediaObject
		| Message
		| Page
		| Questionnaire
		| QuestionnaireItem
		| SurveyInvitation
		| Thread
		| VideoObject
		| WebPage
		| SoftwareApplication;
	session?: Session | UserSession;
}

export interface NavigationEventParams {
	actor: User | Student | Instructor;
	object:
		| DigitalResource
		| SoftwareApplication
		| AudioObject
		| Assessment
		| AssessmentItem
		| AssignableDigitalResource
		| Chapter
		| DigitalResourceCollection
		| Document
		| Forum
		| Frame
		| ImageObject
		| LtiLink
		| MediaLocation
		| MediaObject
		| Message
		| Page
		| Questionnaire
		| QuestionnaireItem
		| SurveyInvitation
		| Thread
		| VideoObject
		| WebPage;
	target?:
		| DigitalResource
		| AudioObject
		| Assessment
		| AssessmentItem
		| AssignableDigitalResource
		| Chapter
		| DigitalResourceCollection
		| Document
		| Forum
		| Frame
		| ImageObject
		| LtiLink
		| MediaLocation
		| MediaObject
		| Message
		| Page
		| Questionnaire
		| QuestionnaireItem
		| SurveyInvitation
		| Thread
		| VideoObject
		| WebPage;
	referrer?:
		| DigitalResource
		| AudioObject
		| Assessment
		| AssessmentItem
		| AssignableDigitalResource
		| Chapter
		| DigitalResourceCollection
		| Document
		| Forum
		| Frame
		| ImageObject
		| LtiLink
		| MediaLocation
		| MediaObject
		| Message
		| Page
		| Questionnaire
		| QuestionnaireItem
		| SurveyInvitation
		| Thread
		| VideoObject
		| WebPage
		| SoftwareApplication;
	session?: Session | UserSession;
	profile?: ProfileType;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	extensions?: Record<string, any>;
}

export function createNavigationEvent(
	params: NavigationEventParams,
	edApp?: SoftwareApplication
): NavigationEvent {
	return {
		'@context': [
			'http://edgenuity.com/events/navigated/0-0-3',
			'http://purl.imsglobal.org/ctx/caliper/v1p2',
		],
		type: EventType.NavigationEvent,
		action: CaliperAction.NavigatedTo,
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}

export const NavigationEventSchema = {
	context: 'http://edgenuity.com/events/navigated/0-0-3',
	schema: {
		title: 'NavigationEvent',
		type: 'object',
		required: ['@context', 'type', 'action', 'actor', 'object', 'id', 'eventTime', 'edApp'],
		properties: {
			'@context': {
				type: 'array',
				items: [
					{
						type: 'string',
						default: 'http://edgenuity.com/events/navigated/0-0-3',
						enum: ['http://edgenuity.com/events/navigated/0-0-3'],
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
				default: 'NavigationEvent',
				enum: ['NavigationEvent'],
			},
			action: {
				type: 'string',
				default: 'NavigatedTo',
				enum: ['NavigatedTo'],
			},
			actor: {
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
			object: {
				required: ['id', 'type'],
				oneOf: [
					{
						title: 'SoftwareApplication',
						$ref: '#/definitions/SoftwareApplication',
					},
					{
						title: 'DigitalResource',
						$ref: '#/definitions/DigitalResource',
					},
					{
						title: 'AudioObject',
						$ref: '#/definitions/AudioObject',
					},
					{
						title: 'Assessment',
						$ref: '#/definitions/Assessment',
					},
					{
						title: 'AssessmentItem',
						$ref: '#/definitions/AssessmentItem',
					},
					{
						title: 'AssignableDigitalResource',
						$ref: '#/definitions/AssignableDigitalResource',
					},
					{
						title: 'Chapter',
						$ref: '#/definitions/Chapter',
					},
					{
						title: 'DigitalResourceCollection',
						$ref: '#/definitions/DigitalResourceCollection',
					},
					{
						title: 'Document',
						$ref: '#/definitions/Document',
					},
					{
						title: 'Forum',
						$ref: '#/definitions/Forum',
					},
					{
						title: 'Frame',
						$ref: '#/definitions/Frame',
					},
					{
						title: 'ImageObject',
						$ref: '#/definitions/ImageObject',
					},
					{
						title: 'LtiLink',
						$ref: '#/definitions/LtiLink',
					},
					{
						title: 'MediaLocation',
						$ref: '#/definitions/MediaLocation',
					},
					{
						title: 'MediaObject',
						$ref: '#/definitions/MediaObject',
					},
					{
						title: 'Message',
						$ref: '#/definitions/Message',
					},
					{
						title: 'Page',
						$ref: '#/definitions/Page',
					},
					{
						title: 'Questionnaire',
						$ref: '#/definitions/Questionnaire',
					},
					{
						title: 'QuestionnaireItem',
						$ref: '#/definitions/QuestionnaireItem',
					},
					{
						title: 'SurveyInvitation',
						$ref: '#/definitions/SurveyInvitation',
					},
					{
						title: 'Thread',
						$ref: '#/definitions/Thread',
					},
					{
						title: 'VideoObject',
						$ref: '#/definitions/VideoObject',
					},
					{
						title: 'WebPage',
						$ref: '#/definitions/WebPage',
					},
				],
			},
			target: {
				required: ['id', 'type'],
				oneOf: [
					{
						title: 'DigitalResource',
						$ref: '#/definitions/DigitalResource',
					},
					{
						title: 'AudioObject',
						$ref: '#/definitions/AudioObject',
					},
					{
						title: 'Assessment',
						$ref: '#/definitions/Assessment',
					},
					{
						title: 'AssessmentItem',
						$ref: '#/definitions/AssessmentItem',
					},
					{
						title: 'AssignableDigitalResource',
						$ref: '#/definitions/AssignableDigitalResource',
					},
					{
						title: 'Chapter',
						$ref: '#/definitions/Chapter',
					},
					{
						title: 'DigitalResourceCollection',
						$ref: '#/definitions/DigitalResourceCollection',
					},
					{
						title: 'Document',
						$ref: '#/definitions/Document',
					},
					{
						title: 'Forum',
						$ref: '#/definitions/Forum',
					},
					{
						title: 'Frame',
						$ref: '#/definitions/Frame',
					},
					{
						title: 'ImageObject',
						$ref: '#/definitions/ImageObject',
					},
					{
						title: 'LtiLink',
						$ref: '#/definitions/LtiLink',
					},
					{
						title: 'MediaLocation',
						$ref: '#/definitions/MediaLocation',
					},
					{
						title: 'MediaObject',
						$ref: '#/definitions/MediaObject',
					},
					{
						title: 'Message',
						$ref: '#/definitions/Message',
					},
					{
						title: 'Page',
						$ref: '#/definitions/Page',
					},
					{
						title: 'Questionnaire',
						$ref: '#/definitions/Questionnaire',
					},
					{
						title: 'QuestionnaireItem',
						$ref: '#/definitions/QuestionnaireItem',
					},
					{
						title: 'SurveyInvitation',
						$ref: '#/definitions/SurveyInvitation',
					},
					{
						title: 'Thread',
						$ref: '#/definitions/Thread',
					},
					{
						title: 'VideoObject',
						$ref: '#/definitions/VideoObject',
					},
					{
						title: 'WebPage',
						$ref: '#/definitions/WebPage',
					},
				],
			},
			referrer: {
				required: ['id', 'type'],
				oneOf: [
					{
						title: 'DigitalResource',
						$ref: '#/definitions/DigitalResource',
					},
					{
						title: 'AudioObject',
						$ref: '#/definitions/AudioObject',
					},
					{
						title: 'Assessment',
						$ref: '#/definitions/Assessment',
					},
					{
						title: 'AssessmentItem',
						$ref: '#/definitions/AssessmentItem',
					},
					{
						title: 'AssignableDigitalResource',
						$ref: '#/definitions/AssignableDigitalResource',
					},
					{
						title: 'Chapter',
						$ref: '#/definitions/Chapter',
					},
					{
						title: 'DigitalResourceCollection',
						$ref: '#/definitions/DigitalResourceCollection',
					},
					{
						title: 'Document',
						$ref: '#/definitions/Document',
					},
					{
						title: 'Forum',
						$ref: '#/definitions/Forum',
					},
					{
						title: 'Frame',
						$ref: '#/definitions/Frame',
					},
					{
						title: 'ImageObject',
						$ref: '#/definitions/ImageObject',
					},
					{
						title: 'LtiLink',
						$ref: '#/definitions/LtiLink',
					},
					{
						title: 'MediaLocation',
						$ref: '#/definitions/MediaLocation',
					},
					{
						title: 'MediaObject',
						$ref: '#/definitions/MediaObject',
					},
					{
						title: 'Message',
						$ref: '#/definitions/Message',
					},
					{
						title: 'Page',
						$ref: '#/definitions/Page',
					},
					{
						title: 'Questionnaire',
						$ref: '#/definitions/Questionnaire',
					},
					{
						title: 'QuestionnaireItem',
						$ref: '#/definitions/QuestionnaireItem',
					},
					{
						title: 'SurveyInvitation',
						$ref: '#/definitions/SurveyInvitation',
					},
					{
						title: 'Thread',
						$ref: '#/definitions/Thread',
					},
					{
						title: 'VideoObject',
						$ref: '#/definitions/VideoObject',
					},
					{
						title: 'WebPage',
						$ref: '#/definitions/WebPage',
					},
					{
						title: 'SoftwareApplication',
						$ref: '#/definitions/SoftwareApplication',
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
			extensions: {
				type: 'object',
				additionalProperties: true,
			},
		},
		definitions: {
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
			Status: {
				type: 'string',
				title: 'Status',
				enum: ['Inactive', 'Active'],
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
					'Placement',
				],
			},
			AudioObject: {
				title: 'AudioObject',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'AudioObject',
						enum: ['AudioObject'],
					},
					volumeMin: {
						type: 'string',
					},
					volumeMax: {
						type: 'string',
					},
					volumeLevel: {
						type: 'string',
					},
					muted: {
						type: 'boolean',
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
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
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'CourseOffering',
								$ref: '#/definitions/CourseOffering',
							},
							{
								title: 'DigitalResourceCollection',
								$ref: '#/definitions/DigitalResourceCollection',
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
			DigitalResourceCollection: {
				title: 'DigitalResourceCollection',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResourceCollection',
						enum: ['DigitalResourceCollection'],
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
			AssessmentItem: {
				title: 'AssessmentItem',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'AssessmentItem',
						enum: ['AssessmentItem'],
					},
					isTimeDependent: {
						type: 'boolean',
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
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'CourseOffering',
								$ref: '#/definitions/CourseOffering',
							},
							{
								title: 'DigitalResourceCollection',
								$ref: '#/definitions/DigitalResourceCollection',
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
			AssignableDigitalResource: {
				title: 'AssignableDigitalResource',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'AssignableDigitalResource',
						enum: ['AssignableDigitalResource'],
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
						required: ['id', 'type'],
						oneOf: [
							{
								title: 'CourseOffering',
								$ref: '#/definitions/CourseOffering',
							},
							{
								title: 'DigitalResourceCollection',
								$ref: '#/definitions/DigitalResourceCollection',
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
			Chapter: {
				title: 'Chapter',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Chapter',
						enum: ['Chapter'],
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
			Document: {
				title: 'Document',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Document',
						enum: ['Document'],
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
			Forum: {
				title: 'Forum',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Forum',
						enum: ['Forum'],
					},
					items: {
						type: 'array',
						items: {
							title: 'Thread',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'Thread',
									$ref: '#/definitions/Thread',
								},
							],
						},
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
			Thread: {
				title: 'Thread',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Thread',
						enum: ['Thread'],
					},
					items: {
						type: 'array',
						items: {
							title: 'Message',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'Message',
									$ref: '#/definitions/Message',
								},
							],
						},
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
			Message: {
				title: 'Message',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Message',
						enum: ['Message'],
					},
					replyTo: {
						title: 'Message',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Message',
								$ref: '#/definitions/Message',
							},
						],
					},
					body: {
						type: 'string',
					},
					attachments: {
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
			Frame: {
				title: 'Frame',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Frame',
						enum: ['Frame'],
					},
					index: {
						type: 'number',
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
			ImageObject: {
				title: 'ImageObject',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'ImageObject',
						enum: ['ImageObject'],
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
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
			LtiLink: {
				title: 'LtiLink',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResource',
						enum: ['DigitalResource'],
					},
					messageType: {
						title: 'LtiMessageType',
						$ref: '#/definitions/LtiMessageType',
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
			LtiMessageType: {
				type: 'string',
				title: 'LtiMessageType',
				enum: ['LtiResourceLinkRequest', 'LtiDeepLinkingRequest', 'LtiDeepLinkingResponse'],
			},
			MediaLocation: {
				title: 'MediaLocation',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'MediaLocation',
						enum: ['MediaLocation'],
					},
					currentTime: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
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
			MediaObject: {
				title: 'MediaObject',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'MediaObject',
						enum: ['MediaObject'],
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
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
			Page: {
				title: 'Page',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'Page',
						enum: ['Page'],
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
			Questionnaire: {
				title: 'Questionnaire',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResource',
						enum: ['DigitalResource'],
					},
					items: {
						type: 'array',
						items: {
							title: 'QuestionnaireItem',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'QuestionnaireItem',
									$ref: '#/definitions/QuestionnaireItem',
								},
							],
						},
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
			QuestionnaireItem: {
				title: 'QuestionnaireItem',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResource',
						enum: ['DigitalResource'],
					},
					question: {
						title: 'Question',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Question',
								$ref: '#/definitions/Question',
							},
						],
					},
					categories: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					weight: {
						type: 'integer',
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
			Question: {
				title: 'Question',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResource',
						enum: ['DigitalResource'],
					},
					questionPosed: {
						type: 'string',
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
			SurveyInvitation: {
				title: 'SurveyInvitation',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'DigitalResource',
						enum: ['DigitalResource'],
					},
					sentCount: {
						type: 'number',
					},
					dateSent: {
						type: 'string',
						pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?Z$',
					},
					rater: {
						title: 'Person',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Person',
								$ref: '#/definitions/Person',
							},
						],
					},
					survey: {
						title: 'Survey',
						allOf: [
							{
								required: ['type', 'id'],
							},
							{
								title: 'Survey',
								$ref: '#/definitions/Survey',
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
			Survey: {
				title: 'Survey',
				type: 'object',
				properties: {
					type: {
						title: 'EntityType',
						$ref: '#/definitions/EntityType',
					},
					items: {
						type: 'array',
						items: {
							title: 'Questionnaire',
							allOf: [
								{
									required: ['type', 'id'],
								},
								{
									title: 'Questionnaire',
									$ref: '#/definitions/Questionnaire',
								},
							],
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
			VideoObject: {
				title: 'VideoObject',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'VideoObject',
						enum: ['VideoObject'],
					},
					duration: {
						type: 'string',
						pattern: '^P(?:\\d+Y)?(?:\\d+M)?(?:\\d+D)?T?(?:\\d+H)?(?:\\d+M)?(?:\\d+S)?',
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
			WebPage: {
				title: 'WebPage',
				type: 'object',
				properties: {
					type: {
						type: 'string',
						default: 'WebPage',
						enum: ['WebPage'],
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
