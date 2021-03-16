/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Organization } from './Organization';
import { Status } from './Status';

export interface District extends Organization {
	id: string;
	status?: Status;
}

export interface DistrictParams {
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

export function createDistrict(params: DistrictParams): District {
	return {
		type: EntityType.District,
		...params,
	};
}
