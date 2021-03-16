/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { MediaObject } from './MediaObject';

export interface AudioObject extends MediaObject {
	id: string;
	volumeMin?: string;
	volumeMax?: string;
	volumeLevel?: string;
	muted?: boolean;
}

export interface AudioObjectParams {
	id: string;
	volumeMin?: string;
	volumeMax?: string;
	volumeLevel?: string;
	muted?: boolean;
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

export function createAudioObject(params: AudioObjectParams): AudioObject {
	return {
		type: EntityType.AudioObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
