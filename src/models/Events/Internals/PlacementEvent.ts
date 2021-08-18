/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { Agent } from '../../Entities/Agent';
import { Entity } from '../../Entities/Entity';
import { PlacementScore } from '../../Entities/PlacementScore';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { UserSession } from '../../Entities/UserSession';
import { BenchmarkEvent, BenchmarkEventAttempt } from '../BenchmarkEvent';
import { CaliperAction } from '../CaliperAction';

export interface PlacementEvent extends Omit<BenchmarkEvent, 'object' | 'generated'> {
	actor: Agent | SoftwareApplication;
	object: Entity | BenchmarkEventAttempt;
	action: CaliperAction;
	generated: PlacementScore;
	session?: Session | UserSession;
}
