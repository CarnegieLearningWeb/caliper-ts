/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Agent } from '../../Entities/Agent';
import { EntityType } from '../../Entities/EntityType';
import { Group } from '../../Entities/Group';
import { Instructor } from '../../Entities/Instructor';
import { Organization } from '../../Entities/Organization';
import { School } from '../../Entities/School';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { User } from '../../Entities/User';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { Event } from '../Event';

export interface GroupEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor | Student;
	object: GroupEventGroup | GroupEventClass;
	action: CaliperAction;
}

export interface GroupEventGroup extends Group {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers: SystemIdentifier[];
}

export interface GroupEventGroupParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers: SystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function createGroupEventGroup(params: GroupEventGroupParams): GroupEventGroup {
	return {
		type: EntityType.Group,
		...params,
	};
}

export interface GroupEventClass extends GroupEventGroup {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers: SystemIdentifier[];
}

export interface GroupEventClassParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	subjects: string[];
	subOrganizationOf: Organization | School | GroupEventGroup | GroupEventClass;
	otherIdentifiers: SystemIdentifier[];
	description?: string;
	extensions?: Record<string, any>;
}

export function createGroupEventClass(params: GroupEventClassParams): GroupEventClass {
	return {
		type: EntityType.Class,
		...params,
	};
}
