/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Lesson } from './Lesson';
import { Status } from './Status';
import { Student } from './Student';

export interface IndividualizedLearningPath extends Entity {
	id: string;
	state?: string;
	student?: Student;
	subject?: string;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	lessons?: Lesson[];
	academicSessionId?: string;
	schoolYear?: number;
	placementId?: string;
}

export interface IndividualizedLearningPathParams {
	id: string;
	state?: string;
	student?: Student;
	subject?: string;
	highestGradeLevel?: number;
	lowestPlacementGrade?: number;
	lessons?: Lesson[];
	academicSessionId?: string;
	schoolYear?: number;
	placementId?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createIndividualizedLearningPath(
	params: IndividualizedLearningPathParams
): IndividualizedLearningPath {
	return {
		type: EntityType.ILP,
		schoolYear: 0,
		...params,
	};
}
