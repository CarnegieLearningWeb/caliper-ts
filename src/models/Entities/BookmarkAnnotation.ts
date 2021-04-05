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

export interface BookmarkAnnotation extends Annotation {
	id: string;
	bookmarkNotes?: string;
}

export interface BookmarkAnnotationParams {
	id: string;
	bookmarkNotes?: string;
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

export function createBookmarkAnnotation(params: BookmarkAnnotationParams): BookmarkAnnotation {
	return {
		type: EntityType.BookmarkAnnotation,
		...params,
	};
}
