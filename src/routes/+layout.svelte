<script>
	import Footer from '$lib/components/nav/Footer.svelte';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import '../app.css';
</script>

<div class="flex h-screen flex-col">
	<Navigation />
	<div class="h-full px-2 nlg:px-0">
		<slot />
	</div>
	<Footer />
</div>
