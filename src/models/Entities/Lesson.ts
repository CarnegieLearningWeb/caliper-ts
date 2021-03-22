/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { Domain } from './Domain';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface Lesson extends AssignableDigitalResource {
	id: string;
	domain?: Domain;
	gradeLevel?: number;
	domainOrder?: number;
	lessonOrder?: number;
}

export interface LessonParams {
	id: string;
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

export function createLesson(params: LessonParams): Lesson {
	return {
		type: EntityType.Lesson,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
