<script lang="ts">
	'@hmr:keep-all';

	import { fileSystemHelper } from 'lib/stores';
	import { csvToObj } from 'csv-to-js-parser';
	import Tool from 'lib/Tool.svelte';
	import AirlinesView from 'lib/AirlinesView.svelte';
	import Box from 'lib/Box.svelte';

	let step = 0;
	let airportNames: string[] = [];
	let selectedAirport: string;
	let databaseNames: string[] = [];
	let selectedDatabase: string;
	let airlinesData: Array<any> = [];

	async function getLocalAirports() {
		await $fileSystemHelper.getMainGameDirectory();
		step = (await $fileSystemHelper.hasMainGameDirectoryHandle()) ? 1 : 0;

		airportNames = await $fileSystemHelper.getAirportsNames();
	}

	async function loadAirport(airportName: string) {
		selectedAirport = airportName;
		step = 2;

		databaseNames = await $fileSystemHelper.getAirportDatabases(airportName);
	}

	async function loadDatabase(airport: string, database: string) {
		selectedDatabase = database;
		step = 3;

		const airlinesString = await $fileSystemHelper.readAirlinesFile(
			selectedAirport,
			selectedDatabase
		);

		airlinesData = csvToObj(airlinesString);
	}

	function goToStep(stepNumber: number) {
		step = stepNumber;
	}
</script>

<div class="steps flex justify-between mb-2">
	<button type="button" class="button is-primary" disabled={step === 0} on:click={() => goToStep(0)}
		>Step 1: Permissions</button
	>
	<button type="button" class="button is-primary" disabled={step === 1} on:click={() => goToStep(1)}
		>Step 2: Airports</button
	>
	<button type="button" class="button is-primary" disabled={step === 2} on:click={() => goToStep(2)}
		>Step 3: Databases</button
	>
	<button type="button" class="button is-primary" disabled={step === 3} on:click={() => goToStep(3)}
		>Step 4: Callsigns</button
	>
</div>

<div class="flex justify-between gap-2">
	<Box title="Airport" showExpansion={false} fullWidth={true}>
		{selectedAirport ?? '---'}
	</Box>
	<Box title="Database" showExpansion={false} fullWidth={true}>
		{selectedDatabase ?? '---'}
	</Box>
</div>

{#if step === 0}
	<p>Use filesystem access to read all callsigns for the airports</p>

	<button type="button" class="button is-primary" on:click={getLocalAirports}>Show Airports</button>
{:else if step === 1}
	{#each airportNames as airportName}
		<Tool name={airportName} on:click={() => loadAirport(airportName)} />
	{/each}
{:else if step === 2}
	{#each databaseNames as databaseName}
		<Tool name={databaseName} on:click={() => loadDatabase(selectedAirport, databaseName)} />
	{/each}
{:else if step === 3}
	<AirlinesView data={airlinesData} />
{/if}
