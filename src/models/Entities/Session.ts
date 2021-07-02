/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Instructor } from './Instructor';
import { Person } from './Person';
import { SoftwareApplication } from './SoftwareApplication';
import { Status } from './Status';
import { Student } from './Student';
import { User } from './User';

export interface Session extends Entity {
	id: string;
	user?: Person | User | Instructor | Student;
	client?: SoftwareApplication;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
}

export interface SessionParams {
	id: string;
	user?: Person | User | Instructor | Student;
	client?: SoftwareApplication;
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

export function createSession(params: SessionParams): Session {
	return {
		type: EntityType.Session,
		...params,
	};
}
