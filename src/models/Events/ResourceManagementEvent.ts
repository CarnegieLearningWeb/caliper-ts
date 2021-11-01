/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
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
import { Event } from './Event';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface ResourceManagementEvent extends Event {
	actor: Person;
	object: DigitalResource;
	action: CaliperAction;
	generated?: DigitalResource;
	session?: Session | UserSession;
}

export interface ResourceManagementEventParams {
	actor: Person;
	object: DigitalResource;
	action?: CaliperAction;
	generated?: DigitalResource;
	session?: Session | UserSession;
	profile?: ProfileType;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createResourceManagementEvent(
	params: ResourceManagementEventParams,
	edApp?: SoftwareApplication
): ResourceManagementEvent {
	return {
		type: EventType.ResourceManagementEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
