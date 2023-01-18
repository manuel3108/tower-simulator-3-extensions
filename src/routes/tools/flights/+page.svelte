<script lang="ts">
	import Input from 'lib/Input.svelte';
	import ScheduleEntry from 'lib/ScheduleEntry';
	import airlines from '$lib/airlines';
	import airports from '$lib/airports';
	import FlightTable from 'lib/FlightTable.svelte';
	import Box from 'lib/Box.svelte';
	import DepartureApproachRatio from 'lib/DepartureApproachRatio.svelte';

	let icaoCode: string;
	let numberOfFlights: number;
	let departureRatio: number;

	let departures: ScheduleEntry[] = [];
	let arrivals: ScheduleEntry[] = [];
	const defaultCsvHeader = 'Airline,Flight Number,Arrival Airport,Departure Airport,';

	function generateSchedules() {
		arrivals = [];
		departures = [];

		const departureFlights = numberOfFlights * departureRatio;
		for (let i = 0; i < numberOfFlights; i++) {
			let airline = airlines[Math.floor(Math.random() * airlines.length)];
			let flightNumber = Math.floor(Math.random() * (9999 - 10 + 1) + 10);
			let departureAirport = icaoCode;
			let arrivalAirport = airports[Math.floor(Math.random() * airports.length)];
			let departureTime = generateRandomTime();
			let arrivalTime = generateRandomTime();

			if (i < departureFlights) {
				departures.push(
					new ScheduleEntry(
						airline.icao,
						flightNumber,
						departureAirport,
						arrivalAirport.icao,
						departureTime
					)
				);
			} else {
				arrivals.push(
					new ScheduleEntry(
						airline.icao,
						flightNumber,
						arrivalAirport.icao,
						departureAirport,
						arrivalTime
					)
				);
			}
		}

		departures = departures;
		arrivals = arrivals;
	}

	function generateRandomTime() {
		let hours = Math.floor(Math.random() * (23 - 0 + 1) + 0);
		let minutes = Math.floor(Math.random() * (59 - 0 + 1) + 0);
		let time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

		return time;
	}

	function resetSchedules() {
		arrivals = [];
		departures = [];
	}

	function downloadArrivals() {
		const header = defaultCsvHeader + 'Arrival Time';

		let arrivalsCSV = convertSchedulesToCsv(arrivals, header);
		downloadCSV(icaoCode + '_arrivals.csv', arrivalsCSV);
	}

	function downloadDepartures() {
		const header = defaultCsvHeader + 'Departure Time';
		let departuresCSV = convertSchedulesToCsv(departures, header);
		downloadCSV(icaoCode + '_departures.csv', departuresCSV);
	}

	function convertSchedulesToCsv(schedules: ScheduleEntry[], header: string) {
		let csv = header;

		for (let i = 0; i < schedules.length; i++) {
			const schedule = schedules[i];

			csv += `${schedule.airline},${schedule.arrivalAirport},${schedule.departureAirport},${schedule.flightNumber},${schedule.flightNumber}\n`;
		}

		return csv;
	}

	function downloadCSV(filename: string, csv: string) {
		let csvFile;
		let downloadLink;

		csvFile = new Blob([csv], { type: 'text/csv' });
		downloadLink = document.createElement('a');
		downloadLink.download = filename;
		downloadLink.href = window.URL.createObjectURL(csvFile);
		downloadLink.style.display = 'none';

		document.body.appendChild(downloadLink);

		downloadLink.click();

		document.body.removeChild(downloadLink);
	}
</script>

<svelte:head>
	<title>Flights - {icaoCode ?? ''}</title>
</svelte:head>

<div class="flex justify-between gap-2 mb-2">
	<Input text="ICAO" bind:value={icaoCode} />
	<Input text="Number of Flights" bind:value={numberOfFlights} isNumber={true} />
</div>
<div class="mb-2">
	<DepartureApproachRatio bind:value={departureRatio} />
</div>
<div class="flex justify-betweens gap-2 mb-2">
	<button type="button" class="button is-primary w-full" on:click={generateSchedules}
		>Generate</button
	>
	<button type="button" class="button is-primary w-full" on:click={resetSchedules}>Reset</button>
	<button type="button" class="button is-primary w-full" on:click={downloadArrivals}
		>Download Arrivals</button
	>
	<button type="button" class="button is-primary w-full" on:click={downloadDepartures}
		>Download Departures</button
	>
</div>

<Box title="Arrivals">
	<FlightTable flights={arrivals} />
</Box>
<Box title="Departures">
	<FlightTable flights={departures} />
</Box>
