/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Agent } from '../../Entities/Agent';
import { Class } from '../../Entities/Class';
import { EntityType } from '../../Entities/EntityType';
import { Group } from '../../Entities/Group';
import { Instructor } from '../../Entities/Instructor';
import { Membership } from '../../Entities/Membership';
import { Organization } from '../../Entities/Organization';
import { Role } from '../../Entities/Role';
import { School } from '../../Entities/School';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { User } from '../../Entities/User';
import { UserSession } from '../../Entities/UserSession';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { Event } from '../Event';

export interface MembershipEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor;
	object: MembershipEventMembership;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface MembershipEventMembership extends Membership {
	id: string;
	member: User | Instructor | Student;
	organization:
		| MembershipEventOrganization
		| MembershipEventSchool
		| MembershipEventGroup
		| MembershipEventClass;
	dateCreated: string;
	dateModified: string;
	roles: Role[];
}

export interface MembershipEventMembershipParams {
	id: string;
	member: User | Instructor | Student;
	organization:
		| MembershipEventOrganization
		| MembershipEventSchool
		| MembershipEventGroup
		| MembershipEventClass;
	dateCreated: string;
	dateModified: string;
	roles: Role[];
	name?: string;
	description?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMembershipEventMembership(
	params: MembershipEventMembershipParams
): MembershipEventMembership {
	return {
		type: EntityType.Membership,
		...params,
	};
}

export interface MembershipEventOrganization extends Organization {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
}

export interface MembershipEventOrganizationParams {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMembershipEventOrganization(
	params: MembershipEventOrganizationParams
): MembershipEventOrganization {
	return {
		type: EntityType.Organization,
		...params,
	};
}

export interface MembershipEventSchool extends School {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
}

export interface MembershipEventSchoolParams {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMembershipEventSchool(
	params: MembershipEventSchoolParams
): MembershipEventSchool {
	return {
		type: EntityType.School,
		...params,
	};
}

export interface MembershipEventGroup extends Group {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
}

export interface MembershipEventGroupParams {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
	subjects?: string[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMembershipEventGroup(
	params: MembershipEventGroupParams
): MembershipEventGroup {
	return {
		type: EntityType.Group,
		...params,
	};
}

export interface MembershipEventClass extends Class {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
}

export interface MembershipEventClassParams {
	id: string;
	name: string;
	subOrganizationOf?: Organization | School | Group | Class;
	academicTerm?: string;
	subjects?: string[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMembershipEventClass(
	params: MembershipEventClassParams
): MembershipEventClass {
	return {
		type: EntityType.Class,
		...params,
	};
}
