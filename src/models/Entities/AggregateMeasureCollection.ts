/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { AggregateMeasure } from './AggregateMeasure';
import { Collection } from './Collection';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface AggregateMeasureCollection extends Collection {
	id: string;
}

export interface AggregateMeasureCollectionParams {
	id: string;
	items?: AggregateMeasure[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createAggregateMeasureCollection(
	params: AggregateMeasureCollectionParams
): AggregateMeasureCollection {
	return {
		type: EntityType.Collection,
		...params,
	};
}
