/** This file was Autogenerated */

import Caliper, { CaliperSettings } from '../caliper';
import { IAgent } from '../Entities/Agent';
import { IAttempt } from '../Entities/Attempt';
import { IEntity } from '../Entities/Entity';
import { ILtiSession } from '../Entities/LtiSession';
import { IMembership } from '../Entities/Membership';
import { IOrganization } from '../Entities/Organization';
import { IPerson } from '../Entities/Person';
import { IScore } from '../Entities/Score';
import { ISession } from '../Entities/Session';
import { ISoftwareApplication } from '../Entities/SoftwareApplication';
import { CaliperAction } from './CaliperAction';
import { CaliperProfile } from './CaliperProfile';
import { IEvent } from './Event';
import { EventType } from './EventType';

export interface IGradeEvent extends IEvent {
	actor: IAgent | IPerson | ISoftwareApplication | IOrganization;
	object: IAttempt;
	generated: IScore;
}

export interface IGradeEventParams {
	actor: IAgent | IPerson | ISoftwareApplication | IOrganization;
	object: IAttempt;
	generated: IScore;
	profile?: CaliperProfile;
	target?: IEntity;
	group?: IOrganization;
	membership?: IMembership;
	federatedSession?: ILtiSession;
	session?: ISession;
	referrer?: IEntity;
	extensions?: Record<string, any>;
}

export function GradeEvent(params: IGradeEventParams, settings?: CaliperSettings): IGradeEvent {
	return {
		type: EventType.GradeEvent,
		action: CaliperAction.None,
		'@context': ['http://purl.imsglobal.org/ctx/caliper/v1p2'],
		id: Caliper.uuid(),
		eventTime: Caliper.timestamp(),
		edApp: Caliper.edApp(settings) as ISoftwareApplication,
		...params,
	};
}
