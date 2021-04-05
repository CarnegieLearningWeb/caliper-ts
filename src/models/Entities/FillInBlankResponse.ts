/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';
import { Status } from './Status';

export interface FillInBlankResponse extends Response {
	id: string;
	values?: string[];
}

export interface FillInBlankResponseParams {
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
	status?: Status;
	extensions?: Record<string, any>;
}

export function createFillInBlankResponse(params: FillInBlankResponseParams): FillInBlankResponse {
	return {
		type: EntityType.FillinBlankResponse,
		...params,
	};
}
