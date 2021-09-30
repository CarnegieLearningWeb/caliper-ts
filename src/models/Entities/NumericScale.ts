/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Scale } from './Scale';
import { Status } from './Status';

export interface NumericScale extends Scale {
	id: string;
	minValue?: number;
	minLabel?: string;
	maxValue?: number;
	maxLabel?: string;
	step?: number;
}

export interface NumericScaleParams {
	id: string;
	minValue?: number;
	minLabel?: string;
	maxValue?: number;
	maxLabel?: string;
	step?: number;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createNumericScale(params: NumericScaleParams): NumericScale {
	return {
		type: EntityType.NumericScale,
		...params,
	};
}
