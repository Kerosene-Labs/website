<script lang="ts">
	export let name: string;
	export let repoUrl: string;
	export let description: string;
</script>

<div class="projectCard">
	<div class="projectCardBody flex flex-col">
		<h1>{name}</h1>
		<p>{description}</p>
	</div>
</div>

<style lang="postcss">
	.projectCard {
		@apply bg-gray-500 border border-slate-400 rounded-3xl p-8;
	}

	.projectCardBody {
		@aply flex flex-row;
	}

	h1 {
		@apply text-gray-200 font-bold text-3xl;
	}

	p {
		@apply text-gray-300 font-medium text-2xl;
	}
</style>