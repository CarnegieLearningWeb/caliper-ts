/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Class } from '../Entities/Class';
import { EntityType } from '../Entities/EntityType';
import { Group } from '../Entities/Group';
import { Instructor } from '../Entities/Instructor';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Role } from '../Entities/Role';
import { School } from '../Entities/School';
import { Status } from '../Entities/Status';
import { Student } from '../Entities/Student';
import { User } from '../Entities/User';
import { SystemIdentifier } from '../SystemIdentifier';

export interface LoginMembership extends Membership {
	id: string;
	organization: Organization | School | Group | Class;
	roles: Role[];
	member?: Person | User | Instructor | Student;
}

export interface LoginMembershipParams {
	id: string;
	organization: Organization | School | Group | Class;
	roles: Role[];
	member?: Person | User | Instructor | Student;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLoginMembership(params: LoginMembershipParams): LoginMembership {
	return {
		type: EntityType.Membership,
		...params,
	};
}
