<script lang="ts">
	import { SubtitleSize } from '$lib/util/text';

	export let size: SubtitleSize = SubtitleSize.BIG;
	export let text: string;
</script>

<h5
	class="subtitle"
	class:text-5xl={size === SubtitleSize.BIG}
	class:text-4xl={size === SubtitleSize.SMALL}
>
	{text}
</h5>

<style lang="postcss">
	h5.subtitle {
		@apply text-center font-bold text-slate-500;
	}
</style>
