/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { createSoftwareApplication, SoftwareApplication } from './Entities/SoftwareApplication';
import { SystemIdentifierType } from './SystemIdentifierType';

export interface SystemIdentifier {
	identifier: string;
	identifierType: SystemIdentifierType;
	type: string;
	source: SoftwareApplication;
	extensions?: Record<string, any>;
}

export interface SystemIdentifierParams {
	sourceUrl: string;
	identifier: string;
	identifierType: SystemIdentifierType;
	extensions?: Record<string, any>;
}

export function createSystemIdentifier(params: SystemIdentifierParams): SystemIdentifier {
	const { sourceUrl, ...args } = params;
	const source = createSoftwareApplication({ id: sourceUrl });

	return {
		type: 'SystemIdentifier',
		source,
		...args,
	};
}
