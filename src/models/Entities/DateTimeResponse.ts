/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';
import { Status } from './Status';

export interface DateTimeResponse extends Response {
	id: string;
	dateTimeSelected?: string;
}

export interface DateTimeResponseParams {
	id: string;
	dateTimeSelected?: string;
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

export function createDateTimeResponse(params: DateTimeResponseParams): DateTimeResponse {
	return {
		type: EntityType.Response,
		...params,
	};
}
