/** This file was Autogenerated */

import Caliper, { CaliperSettings } from '../caliper';
import { IEntity } from '../Entities/Entity';
import { ILtiSession } from '../Entities/LtiSession';
import { IMembership } from '../Entities/Membership';
import { IOrganization } from '../Entities/Organization';
import { IPerson } from '../Entities/Person';
import { ISession } from '../Entities/Session';
import { ISoftwareApplication } from '../Entities/SoftwareApplication';
import { IThread } from '../Entities/Thread';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { IEvent } from './Event';
import { EventType } from './EventType';

export interface IThreadEvent extends IEvent {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: IThread;
	action: CaliperAction;
}

export interface IThreadEventParams {
	actor: IPerson | ISoftwareApplication | IOrganization;
	object: IThread;
	action?: CaliperAction;
	profile?: CaliperProfile;
	target?: IEntity;
	generated?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export function ThreadEvent(params: IThreadEventParams, settings?: CaliperSettings): IThreadEvent {
	return {
		type: EventType.ThreadEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
