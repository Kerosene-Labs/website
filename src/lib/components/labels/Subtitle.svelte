<script lang="ts">
	import { SubtitleSize } from '$lib/util/text';

	export let text: string;
</script>

<h5 class="subtitle">
	{text}
</h5>

<style lang="postcss">
	h5.subtitle {
		@apply text-center font-bold text-slate-500;
		@apply text-2xl;
		@apply md:text-3xl;
	}
</style>
