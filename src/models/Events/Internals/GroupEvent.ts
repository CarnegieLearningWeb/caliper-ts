/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { AcademicSession } from '../../Entities/AcademicSession';
import { Agent } from '../../Entities/Agent';
import { Class } from '../../Entities/Class';
import { EntityType } from '../../Entities/EntityType';
import { Group } from '../../Entities/Group';
import { Instructor } from '../../Entities/Instructor';
import { Organization } from '../../Entities/Organization';
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

export interface GroupEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor | Student;
	object: Group | GroupEventGroup | GroupEventClass;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface GroupEventGroup extends Group {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	academicSession?: AcademicSession;
	subOrganizationOf?: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers?: SystemIdentifier[];
}

export interface GroupEventGroupParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	academicSession?: AcademicSession;
	subOrganizationOf?: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createGroupEventGroup(params: GroupEventGroupParams): GroupEventGroup {
	return {
		type: EntityType.Group,
		...params,
	};
}

export interface GroupEventClass extends Class {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	academicTerm: string;
	subOrganizationOf?: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers?: SystemIdentifier[];
}

export interface GroupEventClassParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	academicTerm: string;
	subOrganizationOf?: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createGroupEventClass(params: GroupEventClassParams): GroupEventClass {
	return {
		type: EntityType.Class,
		...params,
	};
}
