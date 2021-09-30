/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../../caliper';
import { Agent } from '../../Entities/Agent';
import { Attempt } from '../../Entities/Attempt';
import { CourseOffering } from '../../Entities/CourseOffering';
import { Domain } from '../../Entities/Domain';
import { Entity } from '../../Entities/Entity';
import { EntityType } from '../../Entities/EntityType';
import { IndividualizedLearningPath } from '../../Entities/IndividualizedLearningPath';
import { LearningObjective } from '../../Entities/LearningObjective';
import { Lesson } from '../../Entities/Lesson';
import { LessonStatus } from '../../Entities/LessonStatus';
import { LtiSession } from '../../Entities/LtiSession';
import { MasteryScore } from '../../Entities/MasteryScore';
import { Membership } from '../../Entities/Membership';
import { Organization } from '../../Entities/Organization';
import { Person } from '../../Entities/Person';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { UserSession } from '../../Entities/UserSession';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { Event } from '../Event';
import { EventType } from '../EventType';
import { ProfileType } from '../ProfileType';

export interface LessonEvent extends Event {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: LessonEventLesson;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface LessonEventParams {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: LessonEventLesson;
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

export function createLessonEvent(
	params: LessonEventParams,
	edApp?: SoftwareApplication
): LessonEvent {
	return {
		type: EventType.LessonEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}

export interface LessonEventLesson extends Lesson {
	id: string;
	isPartOf: LessonEventIndividualizedLearningPath | CourseOffering;
}

export interface LessonEventLessonParams {
	id: string;
	isPartOf: LessonEventIndividualizedLearningPath | CourseOffering;
	domain?: Domain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
	isAssigned?: boolean;
	language?: string;
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
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLessonEventLesson(params: LessonEventLessonParams): LessonEventLesson {
	return {
		type: EntityType.Lesson,
		...params,
	};
}

export interface LessonEventIndividualizedLearningPath extends IndividualizedLearningPath {
	id: string;
	student: Student;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
}

export interface LessonEventIndividualizedLearningPathParams {
	id: string;
	student: Student;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	state?: string;
	subject?: string;
	lessons?: Lesson[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLessonEventIndividualizedLearningPath(
	params: LessonEventIndividualizedLearningPathParams
): LessonEventIndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		...params,
	};
}

export interface LessonEventMasteryScore extends MasteryScore {
	id: string;
	maxScore: number;
	scoreGiven: number;
	passThreshold: number;
	lessonStatus: LessonStatus;
}

export interface LessonEventMasteryScoreParams {
	id: string;
	maxScore: number;
	scoreGiven: number;
	passThreshold: number;
	lessonStatus: LessonStatus;
	attempt?: Attempt;
	comment?: string;
	scoredBy?: Agent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLessonEventMasteryScore(
	params: LessonEventMasteryScoreParams
): LessonEventMasteryScore {
	return {
		type: EntityType.MasteryScore,
		...params,
	};
}
