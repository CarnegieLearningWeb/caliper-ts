/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface Domain extends Entity {
	standard: string;
	code: string;
	name: string;
}

export interface DomainParams {
	standard: string;
	code: string;
	name: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createDomain(params: DomainParams): Domain {
	return {
		type: EntityType.Domain,
		id: `urn:domain:${params.standard.toLocaleUpperCase()}.${params.code.toLocaleUpperCase()}`,
		...params,
	};
}
