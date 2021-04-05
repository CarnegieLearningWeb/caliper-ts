/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface Person extends Agent {
	id: string;
}

export interface PersonParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createPerson(params: PersonParams): Person {
	return {
		type: EntityType.Person,
		...params,
	};
}
