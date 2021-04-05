/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Annotation } from './Annotation';
import { DigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Status } from './Status';

export interface TagAnnotation extends Annotation {
	id: string;
	tags?: string[];
}

export interface TagAnnotationParams {
	id: string;
	tags?: string[];
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

export function createTagAnnotation(params: TagAnnotationParams): TagAnnotation {
	return {
		type: EntityType.TagAnnotation,
		tags: [],
		...params,
	};
}
