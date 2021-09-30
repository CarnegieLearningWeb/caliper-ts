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
import { LtiMessageType } from './LtiMessageType';
import { Status } from './Status';

export interface LtiLink extends DigitalResource {
	id: string;
	messageType?: LtiMessageType;
}

export interface LtiLinkParams {
	id: string;
	messageType?: LtiMessageType;
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

export function createLtiLink(params: LtiLinkParams): LtiLink {
	return {
		type: EntityType.DigitalResource,
		...params,
	};
}
