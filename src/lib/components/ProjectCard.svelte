<script lang="ts">
	import Button from './Button.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import GithubLink from './GithubLink.svelte';

	export let name: string;
	export let repoUrl: string;
	export let openGraphImageUrl: string;
	export let description: string;
</script>

<div class="projectCard">
	<a href={repoUrl}>
		<img class="openGraphImage" src={openGraphImageUrl} alt="{name} opengraph image" />
	</a>
	<div class="projectCardBody flex flex-col">
		<h1>{name}</h1>
		<p>{description}</p>
	</div>
</div>

<style lang="postcss">
	.projectCard {
		@apply bg-gray-200 border-2 border-slate-200 rounded-3xl;
	}

	.projectCardBody {
		@aply flex flex-row;
	}

	.openGraphImage {
		@apply overflow-clip;
		@apply rounded-t-3xl;
	}

	h1 {
		@apply text-gray-700 font-bold text-6xl;
	}

	p {
		@apply text-gray-500 font-medium text-3xl;
	}
</style>
