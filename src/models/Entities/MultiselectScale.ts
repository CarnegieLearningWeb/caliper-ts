/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Scale } from './Scale';
import { Status } from './Status';

export interface MultiselectScale extends Scale {
	id: string;
	scalePoints?: number;
	itemLabels?: string[];
	itemValues?: string[];
	isOrderedSelection?: boolean;
	minSelections?: number;
	maxSelections?: number;
}

export interface MultiselectScaleParams {
	id: string;
	scalePoints?: number;
	itemLabels?: string[];
	itemValues?: string[];
	isOrderedSelection?: boolean;
	minSelections?: number;
	maxSelections?: number;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createMultiselectScale(params: MultiselectScaleParams): MultiselectScale {
	return {
		type: EntityType.MultiselectScale,
		...params,
	};
}
