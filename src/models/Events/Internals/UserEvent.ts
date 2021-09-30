/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Agent } from '../../Entities/Agent';
import { EntityType } from '../../Entities/EntityType';
import { Instructor } from '../../Entities/Instructor';
import { InstructorPermissions } from '../../Entities/InstructorPermissions';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { StudentProfileSettings } from '../../Entities/StudentProfileSettings';
import { User } from '../../Entities/User';
import { UserSession } from '../../Entities/UserSession';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { Event } from '../Event';

export interface UserEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor;
	object: User | UserEventUser | UserEventInstructor | UserEventStudent;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface UserEventUser extends User {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	email?: string;
	otherIdentifiers?: SystemIdentifier[];
}

export interface UserEventUserParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	email?: string;
	otherIdentifiers?: SystemIdentifier[];
	name: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createUserEventUser(params: UserEventUserParams): UserEventUser {
	return {
		type: EntityType.User,
		...params,
	};
}

export interface UserEventInstructor extends Instructor {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	email?: string;
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
	email?: string;
	otherIdentifiers?: SystemIdentifier[];
	permissions?: InstructorPermissions;
	name: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createUserEventInstructor(params: UserEventInstructorParams): UserEventInstructor {
	return {
		type: EntityType.Instructor,
		...params,
	};
}

export interface UserEventStudent extends Student {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	firstName: string;
	lastName: string;
	gradeLevel: number;
	individualEducationPlan?: boolean;
	englishLanguageLearner?: boolean;
	email?: string;
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
	email?: string;
	otherIdentifiers?: SystemIdentifier[];
	settings?: StudentProfileSettings;
	name: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createUserEventStudent(params: UserEventStudentParams): UserEventStudent {
	return {
		type: EntityType.Student,
		...params,
	};
}
