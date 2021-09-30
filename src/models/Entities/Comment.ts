/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Person } from './Person';
import { Status } from './Status';

export interface Comment extends Entity {
	id: string;
	commenter?: Person;
	commentedOn?: Entity;
	value?: string;
}

export interface CommentParams {
	id: string;
	commenter?: Person;
	commentedOn?: Entity;
	value?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createComment(params: CommentParams): Comment {
	return {
		type: EntityType.Comment,
		...params,
	};
}
