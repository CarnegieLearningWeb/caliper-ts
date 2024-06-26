/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { AcademicSession } from '../../Entities/AcademicSession';
import { Agent } from '../../Entities/Agent';
import { District } from '../../Entities/District';
import { EntityType } from '../../Entities/EntityType';
import { Instructor } from '../../Entities/Instructor';
import { Organization } from '../../Entities/Organization';
import { School } from '../../Entities/School';
import { Session } from '../../Entities/Session';
import { SoftwareApplication } from '../../Entities/SoftwareApplication';
import { Status } from '../../Entities/Status';
import { User } from '../../Entities/User';
import { UserSession } from '../../Entities/UserSession';
import { SystemIdentifier } from '../../SystemIdentifier';
import { CaliperAction } from '../CaliperAction';
import { Event } from '../Event';
import { InstitutionType } from '../InstitutionType';

export interface OrganizationEvent extends Event {
	actor: Agent | SoftwareApplication | User | Instructor;
	object: OrganizationEventOrganization | OrganizationEventDistrict | OrganizationEventSchool;
	action: CaliperAction;
	session?: Session | UserSession;
}

export interface OrganizationEventOrganization extends Organization {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	institutionType: InstitutionType;
	academicSessions?: AcademicSession[];
	subOrganizationOf?: Organization | District | School;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
}

export interface OrganizationEventOrganizationParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	institutionType: InstitutionType;
	academicSessions?: AcademicSession[];
	subOrganizationOf?: Organization | District | School;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createOrganizationEventOrganization(
	params: OrganizationEventOrganizationParams
): OrganizationEventOrganization {
	return {
		type: EntityType.Organization,
		...params,
	};
}

export interface OrganizationEventDistrict extends OrganizationEventOrganization {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	institutionType: InstitutionType;
	academicSessions?: AcademicSession[];
	subOrganizationOf?: Organization | District | School;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
}

export interface OrganizationEventDistrictParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	institutionType: InstitutionType;
	academicSessions?: AcademicSession[];
	subOrganizationOf?: Organization | District | School;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createOrganizationEventDistrict(
	params: OrganizationEventDistrictParams
): OrganizationEventDistrict {
	return {
		type: EntityType.District,
		...params,
	};
}

export interface OrganizationEventSchool extends OrganizationEventOrganization {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	institutionType: InstitutionType;
	academicSessions?: AcademicSession[];
	subOrganizationOf?: Organization | District | School;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
}

export interface OrganizationEventSchoolParams {
	id: string;
	dateCreated: string;
	dateModified: string;
	status: Status;
	name: string;
	state: string;
	timezone: string;
	institutionType: InstitutionType;
	academicSessions?: AcademicSession[];
	subOrganizationOf?: Organization | District | School;
	otherIdentifiers?: SystemIdentifier[];
	preferredName?: string;
	accountManager?: string;
	professionalDevSpecialist?: string;
	externalSalesRep?: string;
	insideSalesRep?: string;
	territory?: string;
	description?: string;
	extensions?: Record<string, any>;
}

export function createOrganizationEventSchool(
	params: OrganizationEventSchoolParams
): OrganizationEventSchool {
	return {
		type: EntityType.School,
		...params,
	};
}
