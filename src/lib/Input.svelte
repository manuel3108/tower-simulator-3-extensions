<script lang="ts">
	export let text: string;
	export let isNumber: boolean = false;
	export let value: string | number;
</script>

<div class="w-full">
	<div>{text}</div>

	{#if isNumber}
		<input type="number" bind:value />
	{:else}
		<input type="text" bind:value />
	{/if}
</div>
