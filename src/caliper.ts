import formatISODuration from 'date-fns/formatISODuration';
import intervalToDuration from 'date-fns/intervalToDuration';
import { v4 } from 'uuid';
import { EntityType } from './models/Entities/EntityType';
import { SoftwareApplication } from './models/Entities/SoftwareApplication';

export interface CaliperSettings {
	/**
	 * Publicly accessible URL of current running application/service
	 */
	applicationUri?: string;
}

export type CaliperTimestamp = string;
export type CaliperDuration = string;

export interface URN {
	/**
	 * Namespace identifier(s)
	 */
	nid: string | string[];
	/**
	 * Namespace-specific string(s)
	 */
	nss: string | string[];
}

/**
 * Global settings for Caliper
 */
const settings: CaliperSettings = {};

/**
 * Format or create an instance of a Caliper compliant UUID
 * @param guid The optional uuid v4 object to format
 */
function uuid(guid?: string) {
	return `urn:uuid:${guid ?? v4()}`;
}

/**
 * Creates a Caliper compliant URN from the specified namespace identifier(s)
 * and namespace-specific string(s)
 */
function urn({ nid, nss }: URN) {
	return `urn:${Array.isArray(nid) ? nid.join(':') : nid}:${
		Array.isArray(nss) ? nss.join(':') : nss
	}`.toLowerCase();
}

/**
 * Create a Caliper event.edApp instance using the applicationUri in the global settings
 */
function edApp({ applicationUri: id } = settings ?? {}) {
	if (!id) {
		return null;
	}

	return {
		id,
		type: EntityType.SoftwareApplication,
	} as SoftwareApplication;
}

/**
 * Formats a Caliper compliant timestamp using one of the supported object types
 * @param date The date object to format
 */
function timestamp(date?: Date | number | string): CaliperTimestamp {
	let dateObj: Date;
	if (!date) {
		dateObj = new Date(Date.now());
	} else if (date instanceof Date) {
		dateObj = date;
	} else if (typeof date === 'string') {
		dateObj = new Date(Date.parse(date));
	} else {
		dateObj = new Date(date);
	}
	return dateObj.toISOString();
}

/**
 * Formats a Caliper compliant duration using a Date range
 * @param startedAtTime The start of the Date range
 * @param endedAtTime The end of the Date range
 */
function duration(startedAtTime: Date | string, endedAtTime: Date | string): CaliperDuration {
	const start = startedAtTime instanceof Date ? startedAtTime : new Date(Date.parse(startedAtTime));
	const end = endedAtTime instanceof Date ? endedAtTime : new Date(Date.parse(endedAtTime));

	return formatISODuration(intervalToDuration({ start, end }));
}

export default { settings, uuid, urn, edApp, timestamp, duration };
