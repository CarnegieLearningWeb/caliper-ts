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
import { QuestionnaireItem } from '../Entities/QuestionnaireItem';
import { Response } from '../Entities/Response';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { Event } from './Event';
import { EventType } from './EventType';
import { ProfileType } from './ProfileType';

export interface QuestionnaireItemEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: QuestionnaireItem;
	action: CaliperAction;
	generated?: Response;
	session?: Session | UserSession;
}

export interface QuestionnaireItemEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: QuestionnaireItem;
	action?: CaliperAction;
	generated?: Response;
	session?: Session | UserSession;
	profile?: ProfileType;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createQuestionnaireItemEvent(
	params: QuestionnaireItemEventParams,
	edApp?: SoftwareApplication
): QuestionnaireItemEvent {
	return {
		type: EventType.Event,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		action: CaliperAction.None,
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
