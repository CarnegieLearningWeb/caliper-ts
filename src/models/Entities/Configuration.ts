/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { ConfigurationData } from './ConfigurationData';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { SoftwareApplication } from './SoftwareApplication';
import { Status } from './Status';

export interface Configuration extends Entity {
	id: string;
	serviceToConfigure?: SoftwareApplication;
	configurationData?: ConfigurationData;
}

export interface ConfigurationParams {
	id: string;
	serviceToConfigure?: SoftwareApplication;
	configurationData?: ConfigurationData;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createConfiguration(params: ConfigurationParams): Configuration {
	return {
		type: EntityType.Configuration,
		...params,
	};
}
