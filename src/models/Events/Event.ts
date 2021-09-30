/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Agent } from '../Entities/Agent';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface Event {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Entity;
	action: CaliperAction;
	'@context': string[];
	id: string;
	type: EventType;
	eventTime: string;
	edApp: SoftwareApplication;
	profile?: ProfileType;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session | UserSession;
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
	profile?: ProfileType;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session | UserSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createEvent(params: EventParams, edApp?: SoftwareApplication): Event {
	return {
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		type: EventType.Event,
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
