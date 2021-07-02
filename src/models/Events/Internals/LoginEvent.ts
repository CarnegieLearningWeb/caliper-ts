/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { AuthorizationClaims } from '../../AuthorizationClaims';
import { CredentialType } from '../../CredentialType';
import { DigitalResource } from '../../Entities/DigitalResource';
import { EntityType } from '../../Entities/EntityType';
import { Instructor } from '../../Entities/Instructor';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { User } from '../../Entities/User';
import { UserSession } from '../../Entities/UserSession';
import { LoginType } from '../../LoginType';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { SessionEvent } from './SessionEvent';

export interface LoginEvent extends SessionEvent {
	actor: User | Instructor | Student;
	object: SoftwareApplication;
	action: CaliperAction;
	session: LoginEventUserSession;
	target?: DigitalResource;
	referrer?: DigitalResource | SoftwareApplication;
}

export interface LoginEventUserSession extends UserSession {
	id: string;
	login: LoginEventAuthorizationClaims;
	client: LoginEventSoftwareApplication;
	user?: User | Instructor | Student;
}

export interface LoginEventUserSessionParams {
	id: string;
	login: LoginEventAuthorizationClaims;
	client: LoginEventSoftwareApplication;
	user?: User | Instructor | Student;
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

export function createLoginEventUserSession(
	params: LoginEventUserSessionParams
): LoginEventUserSession {
	return {
		type: EntityType.UserSession,
		...params,
	};
}

export interface LoginEventAuthorizationClaims extends AuthorizationClaims {
	localTimestamp: string;
	loginType: LoginType;
	credentialTypes: CredentialType[];
	scopes: string[];
}

export interface LoginEventSoftwareApplication extends SoftwareApplication {
	id: string;
	userAgent: string;
	ipAddress: string;
}

export interface LoginEventSoftwareApplicationParams {
	id: string;
	userAgent: string;
	ipAddress: string;
	host?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLoginEventSoftwareApplication(
	params: LoginEventSoftwareApplicationParams
): LoginEventSoftwareApplication {
	return {
		type: EntityType.SoftwareApplication,
		...params,
	};
}
