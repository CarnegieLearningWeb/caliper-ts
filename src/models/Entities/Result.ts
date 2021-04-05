/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Attempt } from './Attempt';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface Result extends Entity {
	id: string;
	attempt?: Attempt;
	maxResultScore?: number;
	resultScore?: number;
	comment?: string;
	scoredBy?: Agent;
}

export interface ResultParams {
	id: string;
	attempt?: Attempt;
	maxResultScore?: number;
	resultScore?: number;
	comment?: string;
	scoredBy?: Agent;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createResult(params: ResultParams): Result {
	return {
		type: EntityType.Result,
		resultScore: 0,
		...params,
	};
}
