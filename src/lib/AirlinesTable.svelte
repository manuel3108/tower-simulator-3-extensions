<script lang="ts">
	export let data: Array<any> = [];
	export let emptyText: string;
</script>

<table>
	<thead>
		<tr>
			<th>Airline</th>
			<th>Callsign</th>
			<th>Name</th>
			<th>Country code</th>
		</tr>
	</thead>
	<tbody>
		{#each data as item}
			<tr>
				<td>{item.Airline}</td>
				<td>{item.Callsign}</td>
				<td>{item.Name}</td>
				<td>{item['Country code']}</td>
			</tr>
		{:else}
			<tr>
				<td colspan="4">{emptyText}</td>
			</tr>
		{/each}
	</tbody>
</table>
