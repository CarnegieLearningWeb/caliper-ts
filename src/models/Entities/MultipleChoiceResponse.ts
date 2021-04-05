/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';
import { Status } from './Status';

export interface MultipleChoiceResponse extends Response {
	id: string;
	value?: string;
}

export interface MultipleChoiceResponseParams {
	id: string;
	value?: string;
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

export function createMultipleChoiceResponse(
	params: MultipleChoiceResponseParams
): MultipleChoiceResponse {
	return {
		type: EntityType.MultipleChoiceResponse,
		...params,
	};
}
