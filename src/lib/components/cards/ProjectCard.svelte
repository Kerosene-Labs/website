<script lang="ts">
	import Button from '../buttons/Button.svelte';

	export let name: string;
	export let repoUrl: string;
	export let description: string;
</script>

<div class="projectCard">
	<div class="flex h-full flex-col gap-2">
		<h1>{name}</h1>
		<p>{description}</p>
		<div class="mt-auto">
			<Button
				on:click={() => {
					window.open(repoUrl);
				}}
				text="View Code"
			></Button>
		</div>
	</div>
</div>

<style lang="postcss">
	.projectCard {
		@apply rounded-3xl bg-gray-100 p-10;
		@apply transition-all duration-[350ms];
		@apply hover:bg-orange-100;
		@apply h-full w-full;
	}

	h1 {
		@apply text-3xl font-bold text-gray-600;
	}

	p {
		@apply text-2xl font-medium text-gray-500;
	}
</style>
