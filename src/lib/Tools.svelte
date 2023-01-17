<script lang="ts">
	export let name: string;
	export let url: string;
	export let image: string;
</script>

<a class="tool" href={'/tools' + url}>
	<div class="box m-2">
		<div>
			<img src={'/tools' + image} alt={name} />
		</div>
		<div class="center mt-2">{name}</div>
	</div>
</a>

<style>
	.tool {
		width: 50%;
	}

	.box {
		margin-bottom: 0;
	}

	.center {
		text-align: center;
	}
</style>
