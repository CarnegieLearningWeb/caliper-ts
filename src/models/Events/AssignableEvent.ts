/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { Assessment } from '../Entities/Assessment';
import { AssessmentItem } from '../Entities/AssessmentItem';
import { AssignableDigitalResource } from '../Entities/AssignableDigitalResource';
import { Attempt } from '../Entities/Attempt';
import { Entity } from '../Entities/Entity';
import { Lesson } from '../Entities/Lesson';
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

export interface AssignableEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: AssignableDigitalResource | Assessment | AssessmentItem | Lesson;
	action: CaliperAction;
	generated?: Attempt;
	session?: Session | UserSession;
}

export interface AssignableEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: AssignableDigitalResource | Assessment | AssessmentItem | Lesson;
	action?: CaliperAction;
	generated?: Attempt;
	session?: Session | UserSession;
	profile?: CaliperProfile;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createAssignableEvent(
	params: AssignableEventParams,
	edApp?: SoftwareApplication
): AssignableEvent {
	return {
		type: EventType.AssignableEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
