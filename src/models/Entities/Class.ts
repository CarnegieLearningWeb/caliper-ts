/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Group } from './Group';
import { Organization } from './Organization';
import { Status } from './Status';

export interface Class extends Group {
	id: string;
	academicTerm?: string;
}

export interface ClassParams {
	id: string;
	academicTerm?: string;
	subjects?: string[];
	subOrganizationOf?: Organization;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createClass(params: ClassParams): Class {
	return {
		type: EntityType.Class,
		...params,
	};
}
