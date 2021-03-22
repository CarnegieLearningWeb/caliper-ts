/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Lesson } from './Lesson';
import { Student } from './Student';

export interface IndividualizedLearningPath extends Entity {
	id: string;
	state?: string;
	student?: Student;
	subject?: string;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	lessons?: Lesson[];
}

export interface IndividualizedLearningPathParams {
	id: string;
	state?: string;
	student?: Student;
	subject?: string;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	lessons?: Lesson[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createIndividualizedLearningPath(
	params: IndividualizedLearningPathParams
): IndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		...params,
	};
}
