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
}

export interface DistrictParams {
	id: string;
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

export function createDistrict(params: DistrictParams): District {
	return {
		type: EntityType.District,
		...params,
	};
}
