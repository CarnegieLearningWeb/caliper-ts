/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Agent } from '../Entities/Agent';
import { Attempt } from '../Entities/Attempt';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Score } from '../Entities/Score';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { Event } from './Event';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface GradeEvent extends Event {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Attempt;
	generated: Score;
	session?: Session | UserSession;
}

export interface GradeEventParams {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Attempt;
	generated: Score;
	session?: Session | UserSession;
	profile?: ProfileType;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createGradeEvent(
	params: GradeEventParams,
	edApp?: SoftwareApplication
): GradeEvent {
	return {
		type: EventType.GradeEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
