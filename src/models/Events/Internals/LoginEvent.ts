/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { CredentialType } from '../../Entities/CredentialType';
import { DigitalResource } from '../../Entities/DigitalResource';
import { EntityType } from '../../Entities/EntityType';
import { Instructor } from '../../Entities/Instructor';
import { LoginType } from '../../Entities/LoginType';
import { Person } from '../../Entities/Person';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { Student } from '../../Entities/Student';
import { User } from '../../Entities/User';
import { UserSession } from '../../Entities/UserSession';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { SessionEvent } from '../SessionEvent';

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
	loginType: LoginType;
	credentials: CredentialType[];
	scopes: string[];
	userAgent: string;
	ipAddress: string;
	localTimestamp: string;
	user?: Person | User | Instructor | Student;
}

export interface LoginEventUserSessionParams {
	id: string;
	loginType: LoginType;
	credentials: CredentialType[];
	scopes: string[];
	userAgent: string;
	ipAddress: string;
	localTimestamp: string;
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

export function createLoginEventUserSession(
	params: LoginEventUserSessionParams
): LoginEventUserSession {
	return {
		type: EntityType.UserSession,
		...params,
	};
}
