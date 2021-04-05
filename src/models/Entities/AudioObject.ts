/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { MediaObject } from './MediaObject';
import { Status } from './Status';

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

export function createAudioObject(params: AudioObjectParams): AudioObject {
	return {
		type: EntityType.AudioObject,
		...params,
	};
}
