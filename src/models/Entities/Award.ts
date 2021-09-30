/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface Award extends Entity {
	id: string;
	comment?: string;
	amount?: number;
}

export interface AwardParams {
	id: string;
	comment?: string;
	amount?: number;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createAward(params: AwardParams): Award {
	return {
		type: EntityType.Award,
		amount: 0,
		...params,
	};
}
