/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';

export interface TrueFalseResponse extends Response {
	id: string;
	value?: boolean;
}

export interface TrueFalseResponseParams {
	id: string;
	value?: boolean;
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

export function createTrueFalseResponse(params: TrueFalseResponseParams): TrueFalseResponse {
	return {
		type: EntityType.TrueFalseResponse,
		value: false,
		...params,
	};
}
