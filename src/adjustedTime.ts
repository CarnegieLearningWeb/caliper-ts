export class AdjustedTime {
	private static serverTime: number = 0;
	private static clientTime: number = 0;

	public static setAdjustment(serverTime: number, clientTime: number): void {
		this.serverTime = serverTime;
		this.clientTime = clientTime;
	}

	public static now(): number {
		return Date.now() + this.serverTime - this.clientTime;
	}
}
