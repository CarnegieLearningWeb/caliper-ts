/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { Agent } from '../Entities/Agent';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { EventType } from './EventType';

export interface Event {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Entity;
	action: CaliperAction;
	'@context': string[];
	id: string;
	type: EventType;
	eventTime: string;
	edApp: SoftwareApplication;
	profile?: CaliperProfile;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export interface EventParams {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Entity;
	action?: CaliperAction;
	'@context'?: string[];
	id?: string;
	type?: EventType;
	eventTime?: string;
	edApp?: SoftwareApplication;
	profile?: CaliperProfile;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createEvent(params: EventParams, settings?: CaliperSettings): Event {
	return {
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		type: EventType.Event,
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as SoftwareApplication,
		...params,
	};
}
