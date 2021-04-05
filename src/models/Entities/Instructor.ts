/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { InstructorPermissions } from './InstructorPermissions';
import { Status } from './Status';
import { User } from './User';

export interface Instructor extends User {
	id: string;
	permissions?: InstructorPermissions;
}

export interface InstructorParams {
	id: string;
	permissions?: InstructorPermissions;
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

export function createInstructor(params: InstructorParams): Instructor {
	return {
		type: EntityType.Instructor,
		...params,
	};
}
