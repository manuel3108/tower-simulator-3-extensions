<script lang="ts">
	export let value = 0.5;

	function toPercent(value: number) {
		return (value * 100).toFixed(0);
	}
</script>

<div class="flex justify-between gap-2">
	<span>Departures {toPercent(value)}%</span>
	<input type="range" bind:value min="0" max="1" step="0.01" />
	<span class="text-right">{toPercent(1 - value)}% Approaches</span>
</div>

<style>
	input {
		width: 100%;
	}

	span {
		width: 30%;
	}
</style>
