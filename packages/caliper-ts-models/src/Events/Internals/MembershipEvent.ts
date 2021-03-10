/** This file was Autogenerated */

import { IAgent } from '../../Entities/Agent';
import { IClass } from '../../Entities/Class';
import { EntityType } from '../../Entities/EntityType';
import { IGroup } from '../../Entities/Group';
import { IInstructor } from '../../Entities/Instructor';
import { IMembership } from '../../Entities/Membership';
import { IOrganization } from '../../Entities/Organization';
import { Role } from '../../Entities/Role';
import { ISchool } from '../../Entities/School';
import { ISoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { IStudent } from '../../Entities/Student';
import { IUser } from '../../Entities/User';
import { ISystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { IEvent } from '../Event';

export interface IMembershipEvent extends IEvent {
	actor: IAgent | ISoftwareApplication | IUser | IInstructor;
	object: IMembershipEventMembership;
	action: CaliperAction;
}

export interface IMembershipEventMembership extends IMembership {
	id: string;
	member: IUser | IInstructor | IStudent;
	organization:
		| IMembershipEventOrganization
		| IMembershipEventSchool
		| IMembershipEventGroup
		| IMembershipEventClass;
	dateCreated: string;
	dateModified: string;
	roles: Role[];
}

export interface IMembershipEventMembershipParams {
	id: string;
	member: IUser | IInstructor | IStudent;
	organization:
		| IMembershipEventOrganization
		| IMembershipEventSchool
		| IMembershipEventGroup
		| IMembershipEventClass;
	dateCreated: string;
	dateModified: string;
	roles: Role[];
	status?: Status;
	name?: string;
	description?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Membership(
	params: IMembershipEventMembershipParams
): IMembershipEventMembership {
	return {
		type: EntityType.Membership,
		...params,
	};
}

export interface IMembershipEventOrganization extends IOrganization {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
}

export interface IMembershipEventOrganizationParams {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Organization(
	params: IMembershipEventOrganizationParams
): IMembershipEventOrganization {
	return {
		type: EntityType.Organization,
		...params,
	};
}

export interface IMembershipEventSchool extends ISchool {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
}

export interface IMembershipEventSchoolParams {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
	status?: Status;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_School(
	params: IMembershipEventSchoolParams
): IMembershipEventSchool {
	return {
		type: EntityType.School,
		...params,
	};
}

export interface IMembershipEventGroup extends IGroup {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
}

export interface IMembershipEventGroupParams {
	id: string;
	name: string;
	subOrganizationOf: IOrganization | ISchool | IGroup | IClass;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Group(params: IMembershipEventGroupParams): IMembershipEventGroup {
	return {
		type: EntityType.Group,
		...params,
	};
}

export interface IMembershipEventClass extends IClass {
	id: string;
	name: string;
	subOrganizationOf: ISchool | IOrganization | IGroup | IClass;
}

export interface IMembershipEventClassParams {
	id: string;
	name: string;
	subOrganizationOf: ISchool | IOrganization | IGroup | IClass;
	status?: Status;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MembershipEvent_Class(params: IMembershipEventClassParams): IMembershipEventClass {
	return {
		type: EntityType.Class,
		...params,
	};
}
