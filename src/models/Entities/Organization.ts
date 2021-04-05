/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface Organization extends Agent {
	id: string;
	subOrganizationOf?: Organization;
}

export interface OrganizationParams {
	id: string;
	subOrganizationOf?: Organization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createOrganization(params: OrganizationParams): Organization {
	return {
		type: EntityType.Organization,
		...params,
	};
}
