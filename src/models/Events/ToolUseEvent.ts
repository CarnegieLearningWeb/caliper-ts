/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
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

export interface ToolUseEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: SoftwareApplication;
	session?: Session | UserSession;
}

export interface ToolUseEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: SoftwareApplication;
	session?: Session | UserSession;
	profile?: ProfileType;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createToolUseEvent(
	params: ToolUseEventParams,
	edApp?: SoftwareApplication
): ToolUseEvent {
	return {
		type: EventType.ToolUseEvent,
		action: CaliperAction.Used,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
