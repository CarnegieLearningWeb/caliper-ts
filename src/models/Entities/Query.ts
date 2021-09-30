/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Status } from './Status';

export interface Query extends Entity {
	id: string;
	creator?: Person;
	searchTarget?: Entity;
	searchTerms?: string;
}

export interface QueryParams {
	id: string;
	creator?: Person;
	searchTarget?: Entity;
	searchTerms?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createQuery(params: QueryParams): Query {
	return {
		type: EntityType.Query,
		...params,
	};
}
