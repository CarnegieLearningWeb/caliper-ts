/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface AssessmentItem extends AssignableDigitalResource {
	id: string;
	isTimeDependent?: boolean;
}

export interface AssessmentItemParams {
	id: string;
	isTimeDependent?: boolean;
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

export function createAssessmentItem(params: AssessmentItemParams): AssessmentItem {
	return {
		type: EntityType.AssessmentItem,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
