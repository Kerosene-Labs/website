<!--
Component: PageSection
Description: A slottable component that forces its width and height to be that of the whole viewport. This component
also exports functions for having the browser smooth scroll to it.
-->
<script lang="ts">
	export let name: string;

	/**
	 * Get this components Element ID
	 */
	export function getElementId() {
		return name + 'Page';
	}

	/**
	 * Get this Element
	 */
	export function getElement(): HTMLElement {
		return document.getElementById(name + 'Page')!;
	}

	/**
	 * Scroll this section into view
	 */
	export function scrollTo() {
		getElement().scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}
</script>

<div class="page" id={getElementId()}>
	<slot />
</div>

<style lang="postcss">
	div.page {
		@apply h-screen w-screen;
	}
</style>
