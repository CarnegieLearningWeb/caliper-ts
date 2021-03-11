/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Organization } from './Organization';

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
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createCourseOffering(params: CourseOfferingParams): CourseOffering {
	return {
		type: EntityType.CourseOffering,
		...params,
	};
}
