/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Comment } from './Comment';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Question } from './Question';
import { Status } from './Status';

export interface Rating extends Entity {
	id: string;
	rater?: Person;
	rated?: Entity;
	question?: Question;
	selections?: string[];
	ratingComment?: Comment;
}

export interface RatingParams {
	id: string;
	rater?: Person;
	rated?: Entity;
	question?: Question;
	selections?: string[];
	ratingComment?: Comment;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createRating(params: RatingParams): Rating {
	return {
		type: EntityType.Rating,
		...params,
	};
}
