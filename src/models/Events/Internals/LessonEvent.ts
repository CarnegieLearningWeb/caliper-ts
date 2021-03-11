/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../../caliper';
import { Agent } from '../../Entities/Agent';
import { Attempt } from '../../Entities/Attempt';
import { Domain } from '../../Entities/Domain';
import { Entity } from '../../Entities/Entity';
import { EntityType } from '../../Entities/EntityType';
import { IndividualizedLearningPath } from '../../Entities/IndividualizedLearningPath';
import { Lesson } from '../../Entities/Lesson';
import { LessonStatus } from '../../Entities/LessonStatus';
import { LtiSession } from '../../Entities/LtiSession';
import { MasteryScore } from '../../Entities/MasteryScore';
import { Membership } from '../../Entities/Membership';
import { Organization } from '../../Entities/Organization';
import { Person } from '../../Entities/Person';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Student } from '../../Entities/Student';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { CaliperProfile } from '../CaliperProfile';
import { Event } from '../Event';
import { EventType } from '../EventType';

export interface LessonEvent extends Event {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: LessonEventLesson;
	action: CaliperAction;
}

export interface LessonEventParams {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: LessonEventLesson;
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

export function createLessonEvent(
	params: LessonEventParams,
	settings?: CaliperSettings
): LessonEvent {
	return {
		type: EventType.LessonEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as SoftwareApplication,
		...params,
	};
}

export interface LessonEventLesson extends Lesson {
	id: string;
	isPartOf: LessonEventIndividualizedLearningPath;
}

export interface LessonEventLessonParams {
	id: string;
	isPartOf: LessonEventIndividualizedLearningPath;
	domain?: Domain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	mediaType?: string;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createLessonEventLesson(params: LessonEventLessonParams): LessonEventLesson {
	return {
		type: EntityType.Lesson,
		learningObjectives: [],
		keywords: [],
		creators: [],
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
