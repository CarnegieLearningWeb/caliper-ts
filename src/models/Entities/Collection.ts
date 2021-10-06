/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface Collection extends Entity {
	id: string;
	items?: Entity[];
}

export interface CollectionParams {
	id: string;
	items?: Entity[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createCollection(params: CollectionParams): Collection {
	return {
		type: EntityType.Collection,
		...params,
	};
}
