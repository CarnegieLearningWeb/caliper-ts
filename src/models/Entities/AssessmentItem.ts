/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { CourseOffering } from './CourseOffering';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface AssessmentItem extends AssignableDigitalResource {
	id: string;
	isTimeDependent?: boolean;
	isPartOf?: CourseOffering;
}

export interface AssessmentItemParams {
	id: string;
	isTimeDependent?: boolean;
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

export function createAssessmentItem(params: AssessmentItemParams): AssessmentItem {
	return {
		type: EntityType.AssessmentItem,
		...params,
	};
}
