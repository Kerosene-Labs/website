<script>
	import Footer from '$lib/components/nav/Footer.svelte';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import '../app.css';
</script>

<div class="flex flex-col page min-h-screen">
	<Navigation />
	<div class="h-full px-2 lg:px-0">
		<slot />
	</div>
	<Footer />
</div>
