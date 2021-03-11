/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { MediaObject } from './MediaObject';

export interface ImageObject extends MediaObject {
	id: string;
}

export interface ImageObjectParams {
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

export function createImageObject(params: ImageObjectParams): ImageObject {
	return {
		type: EntityType.ImageObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
