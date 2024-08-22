<script lang="ts">
	export let name: string;

	export function getElementId() {
		return name + 'Page';
	}
</script>

<div class="page" id={getElementId()}></div>

<style lang="postcss">
	div .page {
	}
</style>
