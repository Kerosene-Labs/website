<script lang="ts">
	import { onMount } from 'svelte';

	// If the drawer is open. Note, this only works on (sm)all  screens.
	export let isDrawerOpen: boolean;
	let isNotMobileDisplay: boolean;

	function handleResize() {
		// determine if we're a "small" display
		isNotMobileDisplay = window.matchMedia('(min-width: 768px)').matches;

		// if we are a small display and the drawer is open, close it
		if (!isNotMobileDisplay && isDrawerOpen) {
			isDrawerOpen = false;
			return;
		}

		// if we're a big display and the drawer isn't open it, open it
		if (isNotMobileDisplay && !isDrawerOpen) {
			isDrawerOpen = true;
			return;
		}
	}

	onMount(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
	});
</script>

<div class:hidden={!isDrawerOpen} id="navbarContent">
	<div class="content">
		<slot />
	</div>
</div>

<style lang="postcss">
	.content {
		@apply flex flex-col;
		@apply transition-all;
		@apply md:flex-row;
	}
</style>
