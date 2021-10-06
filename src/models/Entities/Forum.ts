/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { DigitalResourceCollection } from './DigitalResourceCollection';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';
import { Thread } from './Thread';

export interface Forum extends DigitalResourceCollection {
	id: string;
	items?: Thread[];
}

export interface ForumParams {
	id: string;
	items?: Thread[];
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

export function createForum(params: ForumParams): Forum {
	return {
		type: EntityType.Forum,
		...params,
	};
}
