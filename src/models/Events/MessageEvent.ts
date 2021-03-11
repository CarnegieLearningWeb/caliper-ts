/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { Entity } from '../Entities/Entity';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Message } from '../Entities/Message';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { Event } from './Event';
import { EventType } from './EventType';

export interface MessageEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: Message;
	action: CaliperAction;
}

export interface MessageEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: Message;
	action?: CaliperAction;
	profile?: CaliperProfile;
	target?: Entity;
	generated?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	session?: Session;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createMessageEvent(
	params: MessageEventParams,
	settings?: CaliperSettings
): MessageEvent {
	return {
		type: EventType.MessageEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as SoftwareApplication,
		...params,
	};
}
