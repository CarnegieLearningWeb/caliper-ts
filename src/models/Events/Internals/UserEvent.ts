/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Agent } from '../../Entities/Agent';
import { EntityType } from '../../Entities/EntityType';
import { Instructor } from '../../Entities/Instructor';
import { InstructorPermissions } from '../../Entities/InstructorPermissions';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { StudentProfileSettings } from '../../Entities/StudentProfileSettings';
import { User } from '../../Entities/User';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { Event } from '../Event';

export interface UserEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor;
	object: UserEventUser | UserEventInstructor | UserEventStudent;
	action: CaliperAction;
}

export interface UserEventUser extends User {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: SystemIdentifier[];
}

export interface UserEventUserParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: SystemIdentifier[];
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createUserEventUser(params: UserEventUserParams): UserEventUser {
	return {
		type: EntityType.User,
		...params,
	};
}

export interface UserEventInstructor extends UserEventUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: SystemIdentifier[];
	permissions?: InstructorPermissions;
}

export interface UserEventInstructorParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	otherIdentifiers?: SystemIdentifier[];
	permissions?: InstructorPermissions;
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createUserEventInstructor(params: UserEventInstructorParams): UserEventInstructor {
	return {
		type: EntityType.Instructor,
		...params,
	};
}

export interface UserEventStudent extends UserEventUser {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	gradeLevel: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	otherIdentifiers?: SystemIdentifier[];
	settings?: StudentProfileSettings;
}

export interface UserEventStudentParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	gradeLevel: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	otherIdentifiers?: SystemIdentifier[];
	settings?: StudentProfileSettings;
	name?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createUserEventStudent(params: UserEventStudentParams): UserEventStudent {
	return {
		type: EntityType.Student,
		...params,
	};
}
