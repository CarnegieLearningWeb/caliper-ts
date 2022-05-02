/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { AcademicSessionType } from './AcademicSessionType';
import { Entity } from './Entity';

export interface AcademicSessionReference extends Omit<Entity, 'type'> {
	id: string;
	type: AcademicSessionType;
	title: string;
}
