/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Questionnaire } from './Questionnaire';
import { Status } from './Status';

export interface Survey extends Entity {
	id: string;
	items?: Questionnaire[];
}

export interface SurveyParams {
	id: string;
	items?: Questionnaire[];
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createSurvey(params: SurveyParams): Survey {
	return {
		type: EntityType.Survey,
		...params,
	};
}
