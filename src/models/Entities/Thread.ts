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
import { Message } from './Message';
import { Status } from './Status';

export interface Thread extends DigitalResourceCollection {
	id: string;
	items?: Message[];
}

export interface ThreadParams {
	id: string;
	items?: Message[];
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

export function createThread(params: ThreadParams): Thread {
	return {
		type: EntityType.Thread,
		...params,
	};
}
