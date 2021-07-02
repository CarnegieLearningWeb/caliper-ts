/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { AuthorizationClaims } from '../AuthorizationClaims';
import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Instructor } from './Instructor';
import { Session } from './Session';
import { SoftwareApplication } from './SoftwareApplication';
import { Status } from './Status';
import { Student } from './Student';
import { User } from './User';

export interface UserSession extends Session {
	id: string;
	user?: User | Instructor | Student;
	client?: SoftwareApplication;
	login?: AuthorizationClaims;
}

export interface UserSessionParams {
	id: string;
	user?: User | Instructor | Student;
	client?: SoftwareApplication;
	login?: AuthorizationClaims;
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

export function createUserSession(params: UserSessionParams): UserSession {
	return {
		type: EntityType.UserSession,
		...params,
	};
}
