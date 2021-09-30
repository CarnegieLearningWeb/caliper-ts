/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Response } from './Response';
import { Status } from './Status';

export interface RatingScaleResponse extends Response {
	id: string;
	selections?: string[];
}

export interface RatingScaleResponseParams {
	id: string;
	selections?: string[];
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

export function createRatingScaleResponse(params: RatingScaleResponseParams): RatingScaleResponse {
	return {
		type: EntityType.Response,
		...params,
	};
}
