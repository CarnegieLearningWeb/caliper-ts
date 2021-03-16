/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Attempt } from './Attempt';
import { EntityType } from './EntityType';
import { LessonStatus } from './LessonStatus';
import { Score } from './Score';

export interface MasteryScore extends Score {
	id: string;
	passThreshold?: number;
	lessonStatus?: LessonStatus;
}

export interface MasteryScoreParams {
	id: string;
	passThreshold?: number;
	lessonStatus?: LessonStatus;
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
	extensions?: Record<string, any>;
}

export function createMasteryScore(params: MasteryScoreParams): MasteryScore {
	return {
		type: EntityType.MasteryScore,
		...params,
	};
}
