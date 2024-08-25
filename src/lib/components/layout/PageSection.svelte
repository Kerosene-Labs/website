<!--
Component: PageSection
Description: A slottable component that forces its width and height to be that of the whole viewport. This component
also exports functions for having the browser smooth scroll to it.
-->
<script lang="ts">
	import type { PageSectionType } from "$lib/util/pageSection";

	export let type: PageSectionType;
</script>

<div class="page" id={type}>
	<slot />
</div>

<style lang="postcss">
	div.page {
		@apply h-screen w-screen;
		@apply overflow-clip;
	}
</style>
