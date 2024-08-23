<script lang="ts">
	import { TitleSize } from '$lib/util/text';

	export let text: string;
	export let size: TitleSize = TitleSize.BIG;
</script>

<h1 class="title" class:text-7xl={size === TitleSize.BIG} class:text-5xl={size === TitleSize.SMALL}>
	{text}
</h1>

<style lang="postcss">
	h1.title {
		@apply text-center font-bold text-gray-700;
	}
</style>
