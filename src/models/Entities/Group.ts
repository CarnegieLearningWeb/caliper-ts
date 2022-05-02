/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Organization } from './Organization';
import { Status } from './Status';

export interface Group extends Organization {
	id: string;
	subjects?: string[];
}

export interface GroupParams {
	id: string;
	subjects?: string[];
	subOrganizationOf?: Organization;
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createGroup(params: GroupParams): Group {
	return {
		type: EntityType.Group,
		...params,
	};
}
