/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import Caliper from '../../caliper';
import { BookmarkAnnotation } from '../Entities/BookmarkAnnotation';
import { DigitalResource } from '../Entities/DigitalResource';
import { Entity } from '../Entities/Entity';
import { HighlightAnnotation } from '../Entities/HighlightAnnotation';
import { LtiSession } from '../Entities/LtiSession';
import { Membership } from '../Entities/Membership';
import { Organization } from '../Entities/Organization';
import { Person } from '../Entities/Person';
import { Session } from '../Entities/Session';
import { SharedAnnotation } from '../Entities/SharedAnnotation';
import { SoftwareApplication } from '../Entities/SoftwareApplication';
import { TagAnnotation } from '../Entities/TagAnnotation';
import { UserSession } from '../Entities/UserSession';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { Event } from './Event';
import { EventType } from './EventType';

export interface AnnotationEvent extends Event {
	actor: Person | SoftwareApplication | Organization;
	object: DigitalResource;
	generated: BookmarkAnnotation | HighlightAnnotation | SharedAnnotation | TagAnnotation;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface AnnotationEventParams {
	actor: Person | SoftwareApplication | Organization;
	object: DigitalResource;
	generated: BookmarkAnnotation | HighlightAnnotation | SharedAnnotation | TagAnnotation;
	action?: CaliperAction;
	session?: Session | UserSession;
	profile?: CaliperProfile;
	target?: Entity;
	group?: Organization;
	membership?: Membership;
	federatedSession?: LtiSession;
	referrer?: Entity;
	extensions?: Record<string, any>;
}

export function createAnnotationEvent(
	params: AnnotationEventParams,
	edApp?: SoftwareApplication
): AnnotationEvent {
	return {
		type: EventType.AnnotationEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: edApp ?? (Caliper.edApp() as SoftwareApplication),
		...params,
	};
}
