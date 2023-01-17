export default class ScheduleEntry {
	public airline: string;
	public flightNumber: number;
	public departureAirport: string;
	public arrivalAirport: string;
	public time: string;

	constructor(
		airline: string,
		flightNumber: number,
		departureAirport: string,
		arrivalAirport: string,
		time: string
	) {
		this.airline = airline;
		this.flightNumber = flightNumber;
		this.departureAirport = departureAirport;
		this.arrivalAirport = arrivalAirport;
		this.time = time;
	}
}
