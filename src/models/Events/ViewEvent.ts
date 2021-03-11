/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper, { CaliperSettings } from '../../caliper';
import { DigitalResource } from '../Entities/DigitalResource';
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

export interface ViewEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: DigitalResource;
}

export interface ViewEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: DigitalResource;
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

export function createViewEvent(params: ViewEventParams, settings?: CaliperSettings): ViewEvent {
	return {
		type: EventType.ViewEvent,
		action: CaliperAction.Viewed,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as SoftwareApplication,
		...params,
	};
}
