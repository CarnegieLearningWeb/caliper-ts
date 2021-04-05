/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../../caliper';
import { Agent } from '../../Entities/Agent';
import { Domain } from '../../Entities/Domain';
import { Entity } from '../../Entities/Entity';
import { EntityType } from '../../Entities/EntityType';
import { IndividualizedLearningPath } from '../../Entities/IndividualizedLearningPath';
import { Instructor } from '../../Entities/Instructor';
import { LearningObjective } from '../../Entities/LearningObjective';
import { Lesson } from '../../Entities/Lesson';
import { LtiSession } from '../../Entities/LtiSession';
import { Membership } from '../../Entities/Membership';
import { Organization } from '../../Entities/Organization';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { User } from '../../Entities/User';
import { UserSession } from '../../Entities/UserSession';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { CaliperProfile } from '../CaliperProfile';
import { Event } from '../Event';
import { EventType } from '../EventType';

export interface IlpEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor | Student;
	object: IlpEventIndividualizedLearningPath;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface IlpEventParams {
	actor: Agent | SoftwareApplication | User | Instructor | Student;
	object: IlpEventIndividualizedLearningPath;
	action?: CaliperAction;
	session?: Session | UserSession;
	profile?: CaliperProfile;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createIlpEvent(params: IlpEventParams, edApp?: SoftwareApplication): IlpEvent {
	return {
		type: EventType.IlpEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
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
	status?: Status;
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
	learningObjectives?: LearningObjective[];
	keywords?: string[];
	creators?: Agent[];
	mediaType?: string;
	isPartOf?: Entity;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createIlpEventLesson(params: IlpEventLessonParams): IlpEventLesson {
	return {
		type: EntityType.Lesson,
		...params,
	};
}
