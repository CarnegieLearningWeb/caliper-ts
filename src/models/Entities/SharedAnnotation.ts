/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Annotation } from './Annotation';
import { DigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Status } from './Status';

export interface SharedAnnotation extends Annotation {
	id: string;
	withAgents?: Agent[];
}

export interface SharedAnnotationParams {
	id: string;
	withAgents?: Agent[];
	annotator?: Person;
	annotated?: DigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createSharedAnnotation(params: SharedAnnotationParams): SharedAnnotation {
	return {
		type: EntityType.SharedAnnotation,
		withAgents: [],
		...params,
	};
}
