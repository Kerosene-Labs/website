<script lang="ts">
	import Button from '../buttons/Button.svelte';
</script>

<div class="landingCard">
	<img
		class="landingImage"
		src="kerosene_logo_transparent.png"
		alt="Kerosene Labs logo transparent"
	/>
	<h1>Kerosene Labs</h1>
	<p>Creating vendor independent solutions for micro or macro organizations.</p>
	<Button
		text="What We Do"
		on:click={() => {
			document
				.getElementById('projectCards')
				?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		}}
	></Button>
</div>

<style lang="postcss">
	.landingImage {
		@apply md:w-3/4 md:h-3/4;
		@apply lg:w-1/4 lg:h-1/4;
		@apply drop-shadow-xl;
		@apply mb-6;
	}

	.landingCard {
		@apply bg-inherit rounded-lg;
		@apply p-8;
		@apply w-full;
		@apply flex flex-col items-center gap-3;
	}

	h1 {
		@apply text-gray-700 font-bold text-6xl text-center;
	}

	p {
		@apply text-gray-500 font-medium text-3xl text-center;
	}
</style>
