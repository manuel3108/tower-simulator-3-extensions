<script>
	import Navbar from '$lib/Navbar.svelte';
	import FileSystemApiNotSupportedWarning from 'lib/FileSystemApiNotSupportedWarning.svelte';
	import { onMount } from 'svelte';
	import '../app.css';

	let isFileSystemApiSupported = true;

	onMount(() => {
		isFileSystemApiSupported = window.showDirectoryPicker !== undefined;
	});
</script>

<Navbar />

<main>
	{#if !isFileSystemApiSupported}
		<FileSystemApiNotSupportedWarning />
	{/if}

	<slot />
</main>

<style>
	main {
		min-width: 600px;
		width: 50%;
		margin: 0 auto;
		margin-top: 20px;
	}
</style>
