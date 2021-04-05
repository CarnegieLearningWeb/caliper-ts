/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface SoftwareApplication extends Agent {
	id: string;
	version?: string;
}

export interface SoftwareApplicationParams {
	id: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createSoftwareApplication(params: SoftwareApplicationParams): SoftwareApplication {
	return {
		type: EntityType.SoftwareApplication,
		...params,
	};
}
