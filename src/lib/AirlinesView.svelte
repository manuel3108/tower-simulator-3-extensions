<script lang="ts">
	import AirlinesTable from './AirlinesTable.svelte';
	import Input from './Input.svelte';

	export let data: Array<any>;

	const airlineCodeLength = 3;
	const maxRecentAirlines = 5;

	let searchTerm = '';
	let filteredData: Array<any> = [];
	let recentData: Array<any> = [];

	$: {
		filteredData = data;
		recentData = [];
	}

	$: updateSearchResults(searchTerm);

	function updateSearchResults(searchTerm: string) {
		if (!searchTerm) filteredData = data;

		filteredData = data.filter((x) => x.Airline.includes(searchTerm.toUpperCase())) ?? [];

		if (searchTerm.length === airlineCodeLength && filteredData.length > 0) {
			if (recentData.length > maxRecentAirlines) {
				recentData.pop();
			}

			recentData.unshift(filteredData[0]);

			recentData = recentData;
		}
	}
</script>

<div class="mb-4">
	<div>Recent search results</div>
	<AirlinesTable emptyText="No recent search results" data={recentData} />
</div>

<div class="mb-4">
	<Input text="Airline" bind:value={searchTerm} />
</div>

<AirlinesTable emptyText="No data found" data={filteredData} />
