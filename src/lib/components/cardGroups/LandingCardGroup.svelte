<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { PageSectionType, scrollTo } from '$lib/util/pageSection';
</script>

<div class="flex flex-col items-center gap-4">
	<img src="/kerosene_logo_transparent.png" alt="Kerosene Transparent Logo" />
	<h1 class="title">Kerosene Labs</h1>
	<h5 class="subtitle">Creating vendor independent solutions for micro or macro organizations.</h5>
	<div class="buttonRow pt-6">
		<Button
			text="Our Projects"
			on:click={() => {
				scrollTo(PageSectionType.PROJECTS);
			}}
		/>
		<Button text="GitHub" role="secondary" />
	</div>
</div>

<style lang="postcss">
	img {
		@apply h-[12rem] w-[12rem];
	}
	h1.title {
		@apply text-7xl font-bold;
		@apply text-gray-700;
		@apply text-center;
	}
	h5.subtitle {
		@apply text-4xl font-bold;
		@apply text-slate-500;
		@apply w-3/4;
		@apply text-center;
	}
	div.buttonRow {
		@apply flex w-1/3 flex-row gap-4;
	}
</style>
