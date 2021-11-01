/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Question } from './Question';
import { Status } from './Status';

export interface DateTimeQuestion extends Question {
	id: string;
	minDateTime?: string;
	minLabel?: string;
	maxDateTime?: string;
	maxLabel?: string;
}

export interface DateTimeQuestionParams {
	id: string;
	minDateTime?: string;
	minLabel?: string;
	maxDateTime?: string;
	maxLabel?: string;
	questionPosed?: string;
	learningObjectives?: LearningObjective[];
	keywords?: string[];
	creators?: Agent[];
	mediaType?: string;
	isPartOf?: Entity;
	datePublished?: string;
	version?: string;
	storageName?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createDateTimeQuestion(params: DateTimeQuestionParams): DateTimeQuestion {
	return {
		type: EntityType.DateTimeQuestion,
		...params,
	};
}
