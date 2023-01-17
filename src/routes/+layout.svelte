<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />

<main>
	<slot />
</main>

<style>
	main {
		min-width: 600px;
		width: 50%;
		margin: 0 auto;
	}
</style>
