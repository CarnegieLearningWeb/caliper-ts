/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Status } from './Status';

export interface User extends Person {
	id: string;
	status?: Status;
	firstName?: string;
	lastName?: string;
}

export interface UserParams {
	id: string;
	status?: Status;
	firstName?: string;
	lastName?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createUser(params: UserParams): User {
	return {
		type: EntityType.User,
		...params,
	};
}