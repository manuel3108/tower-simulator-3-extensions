<script lang="ts">
	export let name: string;
	export let url: string | undefined = undefined;
	export let image: string | undefined = undefined;
</script>

<a class="tool" href={url} on:click>
	<div class="box">
		{#if image}
			<div>
				<img src={image} alt={name} />
			</div>
		{/if}
		<div class="center mt-2">{name}</div>
	</div>
</a>

<style>
	.tool {
		width: 50%;
		cursor: pointer;
		user-select: none;
	}

	.box {
		margin-bottom: 0;
	}

	.center {
		text-align: center;
	}
</style>
