<script>
	import Button from './Button.svelte';
</script>

<div class="landingCard">
	<img class="landingImage" src="kerosene_logo_transparent.png" alt="Kerosene Labs logo transparent" />
	<h1>Kerosene Labs</h1>
	<p>Creating vendor independent solutions for micro or macro organizations.</p>
	<Button url="/projects" text="Our Projects"></Button>
</div>

<style lang="postcss">
	.landingImage {
		width: 15rem;
		height: 15rem;
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
		@apply text-gray-700 font-bold text-6xl;
	}

	p {
		@apply text-gray-500 font-medium text-3xl text-center;
	}
</style>
