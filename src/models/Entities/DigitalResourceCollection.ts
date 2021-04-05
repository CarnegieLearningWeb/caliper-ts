/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface DigitalResourceCollection extends DigitalResource {
	id: string;
	items?: DigitalResource[];
}

export interface DigitalResourceCollectionParams {
	id: string;
	items?: DigitalResource[];
	learningObjectives?: LearningObjective[];
	keywords?: string[];
	creators?: Agent[];
	mediaType?: string;
	isPartOf?: Entity;
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

export function createDigitalResourceCollection(
	params: DigitalResourceCollectionParams
): DigitalResourceCollection {
	return {
		type: EntityType.DigitalResourceCollection,
		...params,
	};
}
