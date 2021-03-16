/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';

export interface SelectTextResponse extends Response {
	id: string;
	values?: string[];
}

export interface SelectTextResponseParams {
	id: string;
	values?: string[];
	attempt?: Attempt;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createSelectTextResponse(params: SelectTextResponseParams): SelectTextResponse {
	return {
		type: EntityType.SelectTextResponse,
		...params,
	};
}
