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
import { SurveyInvitation } from '../Entities/SurveyInvitation';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { Event } from './Event';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface SurveyInvitationEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: SurveyInvitation;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface SurveyInvitationEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: SurveyInvitation;
	action?: CaliperAction;
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

export function createSurveyInvitationEvent(
	params: SurveyInvitationEventParams,
	edApp?: SoftwareApplication
): SurveyInvitationEvent {
	return {
		type: EventType.SurveyInvitationEvent,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
