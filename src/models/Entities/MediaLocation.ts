/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface MediaLocation extends DigitalResource {
	id: string;
	currentTime?: string;
}

export interface MediaLocationParams {
	id: string;
	currentTime?: string;
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

export function createMediaLocation(params: MediaLocationParams): MediaLocation {
	return {
		type: EntityType.MediaLocation,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
