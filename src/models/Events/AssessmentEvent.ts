/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Assessment } from '../Entities/Assessment';
import { Attempt } from '../Entities/Attempt';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { Event } from './Event';
import { EventType } from './EventType';

export interface AssessmentEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: Assessment;
	action: CaliperAction;
	generated: Attempt;
}

export interface AssessmentEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: Assessment;
	action?: CaliperAction;
	generated: Attempt;
	profile?: CaliperProfile;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createAssessmentEvent(
	params: AssessmentEventParams,
	edApp?: SoftwareApplication
): AssessmentEvent {
	return {
		type: EventType.AssessmentEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
