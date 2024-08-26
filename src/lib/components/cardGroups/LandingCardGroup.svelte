<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { PageSectionType, scrollTo } from '$lib/util/pageSection';
	import Title from '../labels/Title.svelte';
	import Subtitle from '../labels/Subtitle.svelte';
	import { SubtitleSize } from '$lib/util/text';
	import ButtonRow from '../buttons/ButtonRow.svelte';
</script>

<div class="container">
	<img src="/kerosene_logo_transparent.png" alt="Kerosene Transparent Logo" />
	<Title text="Kerosene Labs" />
	<Subtitle
		text="Creating vendor independent solutions for micro or macro organizations."
		size={SubtitleSize.SMALL}
	/>
	<ButtonRow>
		<Button text="GitHub" role="secondary" />
	</ButtonRow>
</div>

<style lang="postcss">
	img {
		@apply h-[12rem] w-[12rem];
	}
	div.container {
		@apply flex w-full flex-col items-center gap-4;
	}
</style>
