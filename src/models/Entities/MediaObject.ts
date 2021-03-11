/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface MediaObject extends DigitalResource {
	id: string;
	duration?: string;
}

export interface MediaObjectParams {
	id: string;
	duration?: string;
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

export function createMediaObject(params: MediaObjectParams): MediaObject {
	return {
		type: EntityType.MediaObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
