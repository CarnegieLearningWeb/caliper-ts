/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Assessment } from './Assessment';
import { CourseOffering } from './CourseOffering';
import { DigitalResource } from './DigitalResource';
import { DigitalResourceCollection } from './DigitalResourceCollection';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface PlacementTest extends Assessment {
	id: string;
	subject?: string;
	isPartOf?: CourseOffering | DigitalResourceCollection;
}

export interface PlacementTestParams {
	id: string;
	subject?: string;
	isPartOf?: CourseOffering | DigitalResourceCollection;
	items?: DigitalResource[];
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

export function createPlacementTest(params: PlacementTestParams): PlacementTest {
	return {
		type: EntityType.PlacementTest,
		...params,
	};
}
