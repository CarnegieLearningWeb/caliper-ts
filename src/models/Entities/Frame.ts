/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface Frame extends DigitalResource {
	id: string;
	index?: number;
}

export interface FrameParams {
	id: string;
	index?: number;
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

export function createFrame(params: FrameParams): Frame {
	return {
		type: EntityType.Frame,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
