/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Agent } from '../Entities/Agent';
import { DigitalResource } from '../Entities/DigitalResource';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { Event } from './Event';
import { EventType } from './EventType';

export interface SessionEvent extends Event {
	actor: Agent | Person | SoftwareApplication;
	object: SoftwareApplication | Session;
	action: CaliperAction;
	target?: DigitalResource;
	referrer?: DigitalResource | SoftwareApplication;
	session?: Session | UserSession;
}

export interface SessionEventParams {
	actor: Agent | Person | SoftwareApplication;
	object: SoftwareApplication | Session;
	action?: CaliperAction;
	target?: DigitalResource;
	referrer?: DigitalResource | SoftwareApplication;
	session?: Session | UserSession;
	profile?: CaliperProfile;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	extensions?: Record<string, any>;
}

export function createSessionEvent(
	params: SessionEventParams,
	edApp?: SoftwareApplication
): SessionEvent {
	return {
		type: EventType.SessionEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
