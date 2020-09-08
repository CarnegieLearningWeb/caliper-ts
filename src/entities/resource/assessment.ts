// import { EntityType } from '../entityType';
import { DEFAULT_CONFIG, getJsonLdContext, JsonLdContextVersion } from '../../config/config';
import { Entity } from '../entity';
import { EntityType } from '../entityType';
import { AssignableDigitalResource } from './assignableDigitalResource';
import { DigitalResourceCollection } from './digitalResourceCollection';

export type Assessment = Entity & DigitalResourceCollection & AssignableDigitalResource;

export type AssessmentParams = Omit<Assessment, '@context' | 'type'>;

export function createAssessment(delegate: AssessmentParams, contextVersion: JsonLdContextVersion = JsonLdContextVersion.v1p1) {
	return {
		'@context': getJsonLdContext(DEFAULT_CONFIG, contextVersion),
		type: EntityType.Assessment,
		...delegate
	} as Assessment;
}
