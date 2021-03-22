/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Annotation } from './Annotation';
import { DigitalResource } from './DigitalResource';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { TextPositionSelector } from './TextPositionSelector';

export interface HighlightAnnotation extends Annotation {
	id: string;
	selection?: TextPositionSelector;
	selectionText?: string;
}

export interface HighlightAnnotationParams {
	id: string;
	selection?: TextPositionSelector;
	selectionText?: string;
	annotator?: Person;
	annotated?: DigitalResource;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createHighlightAnnotation(params: HighlightAnnotationParams): HighlightAnnotation {
	return {
		type: EntityType.HighlightAnnotation,
		...params,
	};
}
