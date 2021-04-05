/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface LearningObjective extends Entity {
	id: string;
}

export interface LearningObjectiveParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLearningObjective(params: LearningObjectiveParams): LearningObjective {
	return {
		type: EntityType.LearningObjective,
		...params,
	};
}
