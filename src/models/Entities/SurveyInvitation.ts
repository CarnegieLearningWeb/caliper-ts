/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { Agent } from './Agent';
import { DigitalResource } from './DigitalResource';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { LearningObjective } from './LearningObjective';
import { Person } from './Person';
import { Status } from './Status';
import { Survey } from './Survey';

export interface SurveyInvitation extends DigitalResource {
	id: string;
	sentCount?: number;
	dateSent?: string;
	rater?: Person;
	survey?: Survey;
}

export interface SurveyInvitationParams {
	id: string;
	sentCount?: number;
	dateSent?: string;
	rater?: Person;
	survey?: Survey;
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

export function createSurveyInvitation(params: SurveyInvitationParams): SurveyInvitation {
	return {
		type: EntityType.DigitalResource,
		...params,
	};
}
