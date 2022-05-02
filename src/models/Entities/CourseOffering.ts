/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Organization } from './Organization';
import { Status } from './Status';

export interface CourseOffering extends Organization {
	id: string;
	courseNumber?: string;
	academicSession?: string;
}

export interface CourseOfferingParams {
	id: string;
	courseNumber?: string;
	academicSession?: string;
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

export function createCourseOffering(params: CourseOfferingParams): CourseOffering {
	return {
		type: EntityType.CourseOffering,
		...params,
	};
}
