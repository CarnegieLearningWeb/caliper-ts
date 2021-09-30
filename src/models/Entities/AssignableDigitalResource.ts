/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { CourseOffering } from './CourseOffering';
import { DigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface AssignableDigitalResource extends DigitalResource {
	id: string;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	isPartOf?: CourseOffering;
}

export interface AssignableDigitalResourceParams {
	id: string;
	dateToActivate?: string;
	dateToShow?: string;
	dateToStartOn?: string;
	dateToSubmit?: string;
	maxAttempts?: number;
	maxSubmits?: number;
	maxScore?: number;
	isPartOf?: CourseOffering;
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

export function createAssignableDigitalResource(
	params: AssignableDigitalResourceParams
): AssignableDigitalResource {
	return {
		type: EntityType.AssignableDigitalResource,
		...params,
	};
}
