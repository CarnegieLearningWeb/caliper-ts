/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { SystemIdentifier } from '../SystemIdentifier';
import { AcademicSessionReference } from './AcademicSessionReference';
import { AcademicSessionStatus } from './AcademicSessionStatus';
import { AcademicSessionType } from './AcademicSessionType';

export interface AcademicSession extends Omit<AcademicSessionReference, 'status'> {
	id: string;
	status: AcademicSessionStatus;
	dateLastModified: string;
	title: string;
	type: AcademicSessionType;
	startDate: string;
	endDate: string;
	schoolYear: string;
	isPartOf?: AcademicSessionReference;
}

export interface AcademicSessionParams {
	id: string;
	status: AcademicSessionStatus;
	dateLastModified?: string;
	title: string;
	type: AcademicSessionType;
	startDate?: string;
	endDate?: string;
	schoolYear: string;
	isPartOf?: AcademicSessionReference;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	extensions?: Record<string, any>;
}

export function createAcademicSession(params: AcademicSessionParams): AcademicSession {
	return {
		dateLastModified: Caliper.timestamp(),
		startDate: Caliper.timestamp(),
		endDate: Caliper.timestamp(),
		...params,
	};
}
