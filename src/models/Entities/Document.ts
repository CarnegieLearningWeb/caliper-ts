/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface Document extends DigitalResource {
	id: string;
}

export interface DocumentParams {
	id: string;
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

export function createDocument(params: DocumentParams): Document {
	return {
		type: EntityType.Document,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
