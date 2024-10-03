<script>
	import Footer from '$lib/components/nav/Footer.svelte';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import '../app.css';
</script>

<div id="root" class="flex flex-col page min-h-screen h-full">
	<Navigation />
	<div id="contentWrapper" class="flex flex-grow w-full h-full items-center justify-center px-2 lg:px-0">
		<slot />
	</div>
	<Footer />
</div>
