/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface DigitalResourceCollection extends DigitalResource {
	id: string;
	items?: DigitalResource[];
}

export interface DigitalResourceCollectionParams {
	id: string;
	items?: DigitalResource[];
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

export function createDigitalResourceCollection(
	params: DigitalResourceCollectionParams
): DigitalResourceCollection {
	return {
		type: EntityType.DigitalResourceCollection,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
