/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { CourseOffering } from './CourseOffering';
import { Domain } from './Domain';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface Lesson extends AssignableDigitalResource {
	id: string;
	domain?: Domain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
	isAssigned?: boolean;
	language?: string;
	isPartOf?: CourseOffering;
}

export interface LessonParams {
	id: string;
	domain?: Domain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
	isAssigned?: boolean;
	language?: string;
	isPartOf?: CourseOffering;
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
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLesson(params: LessonParams): Lesson {
	return {
		type: EntityType.Lesson,
		...params,
	};
}
