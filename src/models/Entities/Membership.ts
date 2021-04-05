/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Class } from './Class';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Group } from './Group';
import { Instructor } from './Instructor';
import { Organization } from './Organization';
import { Person } from './Person';
import { Role } from './Role';
import { School } from './School';
import { Status } from './Status';
import { Student } from './Student';
import { User } from './User';

export interface Membership extends Entity {
	id: string;
	member?: Person | User | Instructor | Student;
	organization?: Organization | School | Group | Class;
	roles?: Role[];
}

export interface MembershipParams {
	id: string;
	member?: Person | User | Instructor | Student;
	organization?: Organization | School | Group | Class;
	roles?: Role[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMembership(params: MembershipParams): Membership {
	return {
		type: EntityType.Membership,
		...params,
	};
}
