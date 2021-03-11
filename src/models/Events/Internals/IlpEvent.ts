/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../../caliper';
import { Agent } from '../../Entities/Agent';
import { Domain } from '../../Entities/Domain';
import { Entity } from '../../Entities/Entity';
import { EntityType } from '../../Entities/EntityType';
import { IndividualizedLearningPath } from '../../Entities/IndividualizedLearningPath';
import { Instructor } from '../../Entities/Instructor';
import { Lesson } from '../../Entities/Lesson';
import { LtiSession } from '../../Entities/LtiSession';
import { Membership } from '../../Entities/Membership';
import { Organization } from '../../Entities/Organization';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Student } from '../../Entities/Student';
import { User } from '../../Entities/User';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { CaliperProfile } from '../CaliperProfile';
import { Event } from '../Event';
import { EventType } from '../EventType';

export interface IlpEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor | Student;
	object: IlpEventIndividualizedLearningPath;
	action: CaliperAction;
}

export interface IlpEventParams {
	actor: Agent | SoftwareApplication | User | Instructor | Student;
	object: IlpEventIndividualizedLearningPath;
	action?: CaliperAction;
	profile?: CaliperProfile;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createIlpEvent(params: IlpEventParams, settings?: CaliperSettings): IlpEvent {
	return {
		type: EventType.IlpEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}

export interface IlpEventIndividualizedLearningPath extends IndividualizedLearningPath {
	id: string;
	student: Student;
	subject: string;
	state: string;
	highestGradeLevel: number;
	lowestPlacementGrade: number;
	lessons: IlpEventLesson[];
}

export interface IlpEventIndividualizedLearningPathParams {
	id: string;
	student: Student;
	subject: string;
	state: string;
	highestGradeLevel: number;
	lowestPlacementGrade: number;
	lessons: IlpEventLesson[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createIlpEventIndividualizedLearningPath(
	params: IlpEventIndividualizedLearningPathParams
): IlpEventIndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		...params,
	};
}

export interface IlpEventLesson extends Lesson {
	id: string;
	gradeLevel: number;
	domainOrder: number;
	lessonOrder: number;
	domain: Domain;
}

export interface IlpEventLessonParams {
	id: string;
	gradeLevel: number;
	domainOrder: number;
	lessonOrder: number;
	domain: Domain;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	mediaType?: string;
	isPartOf?: Entity;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createIlpEventLesson(params: IlpEventLessonParams): IlpEventLesson {
	return {
		type: EntityType.Lesson,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
