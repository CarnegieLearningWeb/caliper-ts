/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { CourseOffering } from './CourseOffering';
import { DigitalResource } from './DigitalResource';
import { DigitalResourceCollection } from './DigitalResourceCollection';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface Assessment extends AssignableDigitalResource {
	id: string;
	items?: DigitalResource[];
	isPartOf?: CourseOffering | DigitalResourceCollection;
}

export interface AssessmentParams {
	id: string;
	items?: DigitalResource[];
	isPartOf?: CourseOffering | DigitalResourceCollection;
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

export function createAssessment(params: AssessmentParams): Assessment {
	return {
		type: EntityType.Assessment,
		...params,
	};
}
