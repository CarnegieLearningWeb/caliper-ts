/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Status } from './Status';

export interface Annotation extends Entity {
	id: string;
	annotator?: Person;
	annotated?: DigitalResource;
}

export interface AnnotationParams {
	id: string;
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

export function createAnnotation(params: AnnotationParams): Annotation {
	return {
		type: EntityType.Annotation,
		...params,
	};
}
