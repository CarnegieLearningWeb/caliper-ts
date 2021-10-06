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

export interface VideoObject extends MediaObject {
	id: string;
}

export interface VideoObjectParams {
	id: string;
	duration?: string;
	learningObjectives?: LearningObjective[];
	keywords?: string[];
	creators?: Agent[];
	mediaType?: string;
	isPartOf?: Entity;
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

export function createVideoObject(params: VideoObjectParams): VideoObject {
	return {
		type: EntityType.VideoObject,
		...params,
	};
}
