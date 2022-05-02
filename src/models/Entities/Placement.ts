/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';
import { Student } from './Student';

export interface Placement extends Entity {
	id: string;
	assignee?: Student;
	subject?: string;
}

export interface PlacementParams {
	id: string;
	assignee?: Student;
	subject?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createPlacement(params: PlacementParams): Placement {
	return {
		type: EntityType.Placement,
		...params,
	};
}
