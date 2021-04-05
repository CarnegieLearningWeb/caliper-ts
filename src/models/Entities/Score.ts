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

export interface Score extends Entity {
	id: string;
	attempt?: Attempt;
	maxScore?: number;
	scoreGiven?: number;
	comment?: string;
	scoredBy?: Agent;
}

export interface ScoreParams {
	id: string;
	attempt?: Attempt;
	maxScore?: number;
	scoreGiven?: number;
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

export function createScore(params: ScoreParams): Score {
	return {
		type: EntityType.Score,
		...params,
	};
}
