<script lang="ts">

	export let name: string;
	export let repoUrl: string;
	export let openGraphImageUrl: string;
</script>

<div class="projectCard">
	<a href={repoUrl}>
		<img class="openGraphImage" src={openGraphImageUrl} alt="{name} opengraph image" />
	</a>
</div>

<style lang="postcss">
	.projectCard {
		@apply bg-gray-200 border-2 border-slate-200 rounded-3xl w-full h-full;
		@apply overflow-clip;
		@apply hover:drop-shadow-lg drop-shadow-none;
	}

	.openGraphImage {
		@apply rounded-t-3xl;
		@apply w-full h-full;
	}
</style>
