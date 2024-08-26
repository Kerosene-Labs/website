<script lang="ts">
	import { onMount } from 'svelte';

	// If the drawer is open. Note, this only works on (sm)all  screens.
	export let isDrawerOpen: boolean;

    function handleResize() {
        if (window.innerWidth >= 300) {
				isDrawerOpen = true;
			} else {
				isDrawerOpen = false;
			}
    }

	onMount(() => {
		window.addEventListener('resize', handleResize);
        handleResize();
	});
</script>

<div
	class:hidden={!isDrawerOpen}
	id="container"
	class="flex md:flex-row sm:flex-col sm:gap-2 md:gap-6"
>
	<slot />
</div>

<style lang="postcss">
</style>
