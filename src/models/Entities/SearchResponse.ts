/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Query } from './Query';
import { Response } from './Response';
import { SoftwareApplication } from './SoftwareApplication';
import { Status } from './Status';

export interface SearchResponse extends Response {
	id: string;
	searchProvider?: SoftwareApplication;
	searchTarget?: Entity;
	query?: Query;
	searchResultsItemCount?: number;
	searchResults?: Entity[];
}

export interface SearchResponseParams {
	id: string;
	searchProvider?: SoftwareApplication;
	searchTarget?: Entity;
	query?: Query;
	searchResultsItemCount?: number;
	searchResults?: Entity[];
	attempt?: Attempt;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createSearchResponse(params: SearchResponseParams): SearchResponse {
	return {
		type: EntityType.Response,
		...params,
	};
}
