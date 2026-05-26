/**
 * Optional delivery options for Caliper HTTP requests.
 */
export interface CaliperSendOptions {
	/**
	 * Allows the request to outlive the current page during browser lifecycle transitions
	 * Requires Angular HttpClient to be configured with fetch support
	 * @see https://angular.dev/guide/http/setup#withfetch
	 */
	keepalive?: boolean;
}
