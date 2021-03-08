import formatISODuration from 'date-fns/formatISODuration';
import intervalToDuration from 'date-fns/intervalToDuration';
import { v4 } from 'uuid';
import { EntityType } from './Entities/EntityType';
import { ISoftwareApplication } from './Entities/SoftwareApplication';

interface CaliperSettings {
	applicationUri: string | null;
	isValidationEnabled: boolean;
}

type CaliperTimestamp = string;
type CaliperDuration = string;

/**
 * Global settings for Caliper
 */
const settings: CaliperSettings = {
	/**
	 * Publicly accessible URL of current running application/service
	 */
	applicationUri: null,
	/**
	 * Enable or disable validation when sending events to a remote destination
	 */
	isValidationEnabled: true
};

/**
 * Format or create an instance of a Caliper compliant UUID
 * @param uuid The optional uuid v4 object to format
 */
function uuid(uuid?: string) {
	return `urn:uuid:${uuid || v4()}`;
}

/**
 * Create a Caliper event.edApp instance using the applicationUri in the global settings
 */
function edApp(): ISoftwareApplication {
	if (!settings.applicationUri) {
		return null as any;
	}

	return {
		id: settings.applicationUri,
		type: EntityType.SoftwareApplication,
	} as ISoftwareApplication;
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

export default { settings, uuid, edApp, timestamp, duration };
