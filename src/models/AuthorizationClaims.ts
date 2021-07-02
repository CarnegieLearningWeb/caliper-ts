/**
 * DO NOT EDIT!
 * This file was automatically generated.
 */

import { CredentialType } from './CredentialType';
import { LoginType } from './LoginType';

export interface AuthorizationClaims {
	localTimestamp?: string;
	loginType?: LoginType;
	credentialTypes?: CredentialType[];
	scopes?: string[];
}
