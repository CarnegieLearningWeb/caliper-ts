/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Instructor } from './Instructor';
import { Person } from './Person';
import { Session } from './Session';
import { Status } from './Status';
import { Student } from './Student';
import { User } from './User';

export interface LtiSession extends Session {
	id: string;
	messageParameters?: Record<string, any>;
	user?: Person | User | Instructor | Student;
}

export interface LtiSessionParams {
	id: string;
	messageParameters?: Record<string, any>;
	user?: Person | User | Instructor | Student;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLtiSession(params: LtiSessionParams): LtiSession {
	return {
		type: EntityType.LtiSession,
		...params,
	};
}
