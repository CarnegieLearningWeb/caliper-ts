/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Status } from './Status';

export interface Message extends DigitalResource {
	id: string;
	replyTo?: Message;
	body?: string;
	attachments?: DigitalResource[];
}

export interface MessageParams {
	id: string;
	replyTo?: Message;
	body?: string;
	attachments?: DigitalResource[];
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

export function createMessage(params: MessageParams): Message {
	return {
		type: EntityType.Message,
		...params,
	};
}
