/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResourceCollection } from './DigitalResourceCollection';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Thread } from './Thread';

export interface Forum extends DigitalResourceCollection {
	id: string;
	items?: Thread[];
}

export interface ForumParams {
	id: string;
	items?: Thread[];
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

export function createForum(params: ForumParams): Forum {
	return {
		type: EntityType.Forum,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
