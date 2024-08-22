<script lang="ts">
	import Button from '../buttons/Button.svelte';

	export let name: string;
	export let repoUrl: string;
	export let description: string;
</script>

<div class="projectCard">
	<div class="flex flex-col gap-2">
		<h1>{name}</h1>
		<p>{description}</p>
		<Button
			on:click={() => {
				window.open(repoUrl);
			}}
			text="Visit Repository"
		></Button>
	</div>
</div>

<style lang="postcss">
	.projectCard {
		@apply bg-gray-100 rounded-3xl p-10;
		@apply transition-all duration-[350ms];
		@apply hover:bg-orange-100;
		@apply w-full h-full;
	}

	h1 {
		@apply text-gray-600 font-bold text-3xl;
	}

	p {
		@apply text-gray-500 font-medium text-2xl;
	}
</style>
