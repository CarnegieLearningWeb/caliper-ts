/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface EducationStandard extends Entity {
	id: string;
}

export interface EducationStandardParams {
	id: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createEducationStandard(params: EducationStandardParams): EducationStandard {
	return {
		type: EntityType.EducationStandard,
		...params,
	};
}
