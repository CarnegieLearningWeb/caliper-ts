/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { CourseOffering } from './CourseOffering';
import { EntityType } from './EntityType';
import { Organization } from './Organization';

export interface CourseSection extends CourseOffering {
	id: string;
	category?: string;
}

export interface CourseSectionParams {
	id: string;
	category?: string;
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

export function createCourseSection(params: CourseSectionParams): CourseSection {
	return {
		type: EntityType.CourseSection,
		...params,
	};
}
