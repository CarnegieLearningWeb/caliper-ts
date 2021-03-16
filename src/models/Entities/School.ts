/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Organization } from './Organization';
import { Status } from './Status';

export interface School extends Organization {
	id: string;
	status?: Status;
}

export interface SchoolParams {
	id: string;
	status?: Status;
	subOrganizationOf?: Organization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createSchool(params: SchoolParams): School {
	return {
		type: EntityType.School,
		...params,
	};
}
