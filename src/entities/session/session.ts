import { DEFAULT_CONFIG, getJsonLdContext, JsonLdContextVersion } from '../../config/config';
import { Person } from '../agent/person';
import { Entity } from '../entity';
import { EntityType } from '../entityType';
import { getFormattedDuration } from '../../utils/dateUtils';

export type Session = {
	user?: Person | string;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
} & Entity;

export type SessionParams = Omit<Session, '@context' | 'type'>;

export function createSession(delegate: SessionParams, contextVersion: JsonLdContextVersion = JsonLdContextVersion.v1p1): Session {
	return {
		'@context': getJsonLdContext(DEFAULT_CONFIG, contextVersion),
		type: EntityType.session,
		duration:
			delegate.startedAtTime && delegate.endedAtTime ? getFormattedDuration(delegate.startedAtTime, delegate.endedAtTime) : undefined,
		...delegate
	} as Session;
}
