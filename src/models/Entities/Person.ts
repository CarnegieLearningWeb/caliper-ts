/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { EntityType } from './EntityType';

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
	extensions?: Record<string, any>;
}

export function createPerson(params: PersonParams): Person {
	return {
		type: EntityType.Person,
		...params,
	};
}
