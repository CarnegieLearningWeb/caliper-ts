/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Assessment } from './Assessment';
import { AssessmentItem } from './AssessmentItem';
import { AssignableDigitalResource } from './AssignableDigitalResource';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Instructor } from './Instructor';
import { Lesson } from './Lesson';
import { Person } from './Person';
import { Status } from './Status';
import { Student } from './Student';
import { User } from './User';

export interface Attempt extends Entity {
	id: string;
	assignable?: DigitalResource | AssignableDigitalResource | Assessment | AssessmentItem | Lesson;
	assignee?: Person | User | Instructor | Student;
	count?: number;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	isPartOf?: Attempt;
}

export interface AttemptParams {
	id: string;
	assignable?: DigitalResource | AssignableDigitalResource | Assessment | AssessmentItem | Lesson;
	assignee?: Person | User | Instructor | Student;
	count?: number;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	isPartOf?: Attempt;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createAttempt(params: AttemptParams): Attempt {
	return {
		type: EntityType.Attempt,
		...params,
	};
}
