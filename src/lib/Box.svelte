<script lang="ts">
	import { slide } from 'svelte/transition';
	export let title: string;
	export let isExpanded = true;

	function expandOrHide() {
		isExpanded = !isExpanded;
	}
</script>

<div class="box">
	<div class="flex flex-row">
		<div class="grow "><h3 class="subtitle">{title}</h3></div>
		<div>
			<button class="button is-primary is-small" on:click={expandOrHide}>
				{isExpanded ? 'Hide' : 'Expand'}
			</button>
		</div>
	</div>

	{#if isExpanded}
		<div class="content" transition:slide>
			<slot />
		</div>
	{/if}
</div>

<style>
	button {
		margin-bottom: 0;
	}

	.content {
		margin-top: 10px;
	}
</style>
