/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { MediaObject } from './MediaObject';

export interface VideoObject extends MediaObject {
	id: string;
}

export interface VideoObjectParams {
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

export function createVideoObject(params: VideoObjectParams): VideoObject {
	return {
		type: EntityType.VideoObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
