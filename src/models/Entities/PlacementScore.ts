/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { Score } from './Score';
import { Status } from './Status';

export interface PlacementScore extends Score {
	id: string;
	placementGrade: number;
}

export interface PlacementScoreParams {
	id: string;
	placementGrade: number;
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

export function createPlacementScore(params: PlacementScoreParams): PlacementScore {
	return {
		type: EntityType.PlacementScore,
		...params,
	};
}
