/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResourceCollection } from './DigitalResourceCollection';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Message } from './Message';

export interface Thread extends DigitalResourceCollection {
	id: string;
	items?: Message[];
}

export interface ThreadParams {
	id: string;
	items?: Message[];
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

export function createThread(params: ThreadParams): Thread {
	return {
		type: EntityType.Thread,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
