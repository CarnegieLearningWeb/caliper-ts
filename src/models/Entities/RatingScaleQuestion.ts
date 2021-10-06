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
import { Scale } from './Scale';
import { Status } from './Status';

export interface RatingScaleQuestion extends Question {
	id: string;
	scale?: Scale;
}

export interface RatingScaleQuestionParams {
	id: string;
	scale?: Scale;
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

export function createRatingScaleQuestion(params: RatingScaleQuestionParams): RatingScaleQuestion {
	return {
		type: EntityType.DigitalResource,
		...params,
	};
}
