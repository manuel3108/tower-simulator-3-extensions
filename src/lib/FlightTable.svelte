<script lang="ts">
	import type ScheduleEntry from './ScheduleEntry';

	export let flights: ScheduleEntry[];
</script>

<table class="mb-2">
	<thead>
		<tr>
			<th>Airline</th>
			<th>Flight Number</th>
			<th>Departure Airport</th>
			<th>Arrival Airport</th>
			<th>Time</th>
		</tr>
	</thead>
	<tbody>
		{#each flights as departure}
			<tr>
				<td>{departure.airline}</td>
				<td>{departure.flightNumber}</td>
				<td>{departure.departureAirport}</td>
				<td>{departure.arrivalAirport}</td>
				<td>{departure.time}</td>
			</tr>
		{:else}
			<tr>
				<td colspan="5">No data</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
	}

	th,
	td {
		text-align: center;
		padding: 5px;
	}

	tbody tr:nth-child(odd) {
		background-color: var(--dark-grey);
	}
</style>
