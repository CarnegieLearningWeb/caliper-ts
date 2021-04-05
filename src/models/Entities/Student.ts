/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Status } from './Status';
import { StudentProfileSettings } from './StudentProfileSettings';
import { User } from './User';

export interface Student extends User {
	id: string;
	gradeLevel?: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	settings?: StudentProfileSettings;
}

export interface StudentParams {
	id: string;
	gradeLevel?: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	settings?: StudentProfileSettings;
	name?: string;
	firstName?: string;
	lastName?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createStudent(params: StudentParams): Student {
	return {
		type: EntityType.Student,
		...params,
	};
}
