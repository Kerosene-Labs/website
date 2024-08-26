<script lang="ts">
	import Button from '../buttons/Button.svelte';
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
		<Button
			on:click={() => {
				window.open('https://github.com/Kerosene-Labs');
			}}
			text="GitHub"
			role="secondary"
		/>
	</ButtonRow>
</div>

<style lang="postcss">
	img {
		@apply h-[11rem] w-[11rem];
		@apply md:h-[14rem] md:w-[14rem];
	}
	.container {
		@apply m-4 flex w-full flex-col items-center gap-8;
		@apply md:w-[40rem];
	}
</style>
