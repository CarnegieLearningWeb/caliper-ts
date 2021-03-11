/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
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
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { Event } from './Event';
import { EventType } from './EventType';

export interface GradeEvent extends Event {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Attempt;
	generated: Score;
}

export interface GradeEventParams {
	actor: Agent | Person | SoftwareApplication | Organization;
	object: Attempt;
	generated: Score;
	profile?: CaliperProfile;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createGradeEvent(params: GradeEventParams, settings?: CaliperSettings): GradeEvent {
	return {
		type: EventType.GradeEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as SoftwareApplication,
		...params,
	};
}
