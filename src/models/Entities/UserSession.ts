/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { CredentialType } from './CredentialType';
import { EntityType } from './EntityType';
import { Instructor } from './Instructor';
import { LoginType } from './LoginType';
import { Person } from './Person';
import { Session } from './Session';
import { Student } from './Student';
import { User } from './User';

export interface UserSession extends Session {
	id: string;
	loginType?: LoginType;
	credentials?: CredentialType[];
	scopes?: string[];
	userAgent?: string;
	ipAddress?: string;
	localTimestamp?: string;
	user?: Person | User | Instructor | Student;
}

export interface UserSessionParams {
	id: string;
	loginType?: LoginType;
	credentials?: CredentialType[];
	scopes?: string[];
	userAgent?: string;
	ipAddress?: string;
	localTimestamp?: string;
	user?: Person | User | Instructor | Student;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createUserSession(params: UserSessionParams): UserSession {
	return {
		type: EntityType.UserSession,
		...params,
	};
}
