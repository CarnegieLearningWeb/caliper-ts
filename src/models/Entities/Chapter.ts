/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface Chapter extends DigitalResource {
	id: string;
}

export interface ChapterParams {
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

export function createChapter(params: ChapterParams): Chapter {
	return {
		type: EntityType.Chapter,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
