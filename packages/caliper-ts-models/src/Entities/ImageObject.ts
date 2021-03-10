/** This file was Autogenerated */

import { ISystemIdentifier } from '../SystemIdentifier';
import { IEntity } from './Entity';
import { EntityType } from './EntityType';
import { IMediaObject } from './MediaObject';

export interface IImageObject extends IMediaObject {
	id: string;
}

export interface IImageObjectParams {
	id: string;
	duration?: string;
	mediaType?: string;
	isPartOf?: IEntity;
	datePublished?: string;
	version?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function ImageObject(params: IImageObjectParams): IImageObject {
	return {
		type: EntityType.ImageObject,
		learningObjectives: [],
		keywords: [],
		creators: [],
		...params,
	};
}
