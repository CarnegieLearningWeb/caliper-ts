/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { EntityType } from './EntityType';

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
	extensions?: Record<string, any>;
}

export function createSoftwareApplication(params: SoftwareApplicationParams): SoftwareApplication {
	return {
		type: EntityType.SoftwareApplication,
		...params,
	};
}
