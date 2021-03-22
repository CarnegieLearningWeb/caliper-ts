/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface Assessment extends AssignableDigitalResource {
	id: string;
	items?: DigitalResource[];
}

export interface AssessmentParams {
	id: string;
	items?: DigitalResource[];
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

export function createAssessment(params: AssessmentParams): Assessment {
	return {
		type: EntityType.Assessment,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
