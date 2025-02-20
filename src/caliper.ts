import * as durationFns from "duration-fns";
import { v4 } from "uuid";
import { EntityType } from "./models/Entities/EntityType";
import { SoftwareApplication } from "./models/Entities/SoftwareApplication";
import { AdjustedTime } from "./adjustedTime";

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
	return `urn:${Array.isArray(nid) ? nid.join(":") : nid}:${
		Array.isArray(nss) ? nss.join(":") : nss
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
		dateObj = new Date(AdjustedTime.now());
	} else if (date instanceof Date) {
		dateObj = date;
	} else if (typeof date === "string") {
		dateObj = new Date(Date.parse(date));
	} else {
		dateObj = new Date(date);
	}
	return dateObj.toISOString();
}

const formatDuration = ({
	years,
	months,
	weeks,
	days,
	hours,
	minutes,
	seconds,
	milliseconds,
}: durationFns.Duration) => {
	// The complexity of this method is because the library was converting (2041801ms => PT34M1.8010000002S)
	// probably because of inappropriate use of floating point vs integerial operations internally?
	const t = (value: number, suffix: string) =>
		value ? `${value}${suffix}` : "";
	const formattedSeconds = (seconds * 1000 + milliseconds) / 1000;
	let text = `P${t(years, "Y")}${t(months, "M")}${t(weeks, "W")}${t(
		days,
		"D"
	)}`;

	if (hours || minutes || formattedSeconds) {
		text += `T${t(hours, "H")}${t(minutes, "M")}${t(
			formattedSeconds,
			"S"
		)}`;
	}

	return text;
};

/**
 * Formats a Caliper compliant duration using a Date range
 * @param startedAtTime The start of the Date range
 * @param endedAtTime The end of the Date range
 */
function duration(
	startedAtTime: Date | string,
	endedAtTime: Date | string
): CaliperDuration {
	const start =
		startedAtTime instanceof Date
			? startedAtTime
			: new Date(Date.parse(startedAtTime));
	const end =
		endedAtTime instanceof Date
			? endedAtTime
			: new Date(Date.parse(endedAtTime));

	return formatDuration(
		durationFns.normalize(durationFns.between(start, end))
	);
}

/**
 * Formats a Caliper compliant duration using a scalar millisecond value
 * @param milliseconds The scalar amount of milliseconds
 */
function durationMilliseconds(milliseconds: number) {
	return formatDuration(durationFns.normalize({ milliseconds }));
}

export default {
	settings,
	uuid,
	urn,
	edApp,
	timestamp,
	duration,
	durationMilliseconds,
};
