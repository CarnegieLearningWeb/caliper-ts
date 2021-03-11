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
	status?: Status;
}

export interface ClassParams {
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

export function createClass(params: ClassParams): Class {
	return {
		type: EntityType.Class,
		...params,
	};
}
