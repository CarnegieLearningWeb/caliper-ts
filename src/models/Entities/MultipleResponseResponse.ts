/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';

export interface MultipleResponseResponse extends Response {
	id: string;
	values?: string[];
}

export interface MultipleResponseResponseParams {
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

export function createMultipleResponseResponse(
	params: MultipleResponseResponseParams
): MultipleResponseResponse {
	return {
		type: EntityType.MultipleResponseResponse,
		...params,
	};
}
