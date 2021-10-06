/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { SystemIdentifier } from '../SystemIdentifier';
import { CaliperMetric } from './CaliperMetric';
import { Entity } from './Entity';
import { EntityType } from './EntityType';
import { Status } from './Status';

export interface AggregateMeasure extends Entity {
	id: string;
	metricValue?: number;
	maxMetricValue?: number;
	metric?: CaliperMetric;
	startedAtTime?: string;
	endedAtTime?: string;
}

export interface AggregateMeasureParams {
	id: string;
	metricValue?: number;
	maxMetricValue?: number;
	metric?: CaliperMetric;
	startedAtTime?: string;
	endedAtTime?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: SystemIdentifier[];
	status?: Status;
	extensions?: Record<string, any>;
}

export function createAggregateMeasure(params: AggregateMeasureParams): AggregateMeasure {
	return {
		type: EntityType.AggregateMeasure,
		metricValue: 0,
		maxMetricValue: 0,
		metric: CaliperMetric.AssessmentsPassed,
		...params,
	};
}
