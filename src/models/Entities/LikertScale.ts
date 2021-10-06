/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { EntityType } from './EntityType';
import { Scale } from './Scale';
import { Status } from './Status';

export interface LikertScale extends Scale {
	id: string;
	scalePoints?: number;
	itemLabels?: string[];
	itemValues?: string[];
}

export interface LikertScaleParams {
	id: string;
	scalePoints?: number;
	itemLabels?: string[];
	itemValues?: string[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createLikertScale(params: LikertScaleParams): LikertScale {
	return {
		type: EntityType.LikertScale,
		...params,
	};
}
