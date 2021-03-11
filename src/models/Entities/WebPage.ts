/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';

export interface WebPage extends DigitalResource {
	id: string;
}

export interface WebPageParams {
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

export function createWebPage(params: WebPageParams): WebPage {
	return {
		type: EntityType.WebPage,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
