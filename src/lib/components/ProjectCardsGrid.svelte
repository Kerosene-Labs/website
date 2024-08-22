<script>

	import ProjectCard from "./ProjectCard.svelte";

</script>
<div class="page">
	<div class="projectCards">
		<ProjectCard
			name="Kindling"
			repoUrl="https://github.com/Kerosene-Labs/kindling"
			openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/kindling"
		></ProjectCard>
		<ProjectCard
			name="ATC"
			repoUrl="https://github.com/Kerosene-Labs/atc"
			openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/atc"
		></ProjectCard>
		<ProjectCard
			name="Arg"
			repoUrl="https://github.com/Kerosene-Labs/arg"
			openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/arg"
		></ProjectCard>
		<ProjectCard
			name="Espresso"
			repoUrl="https://github.com/Kerosene-Labs/espresso"
			openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/espresso"
		></ProjectCard>
	</div>
</div>

<style lang="postcss">
	.projectCards {
		@apply grid md:grid-cols-1 md:grid-rows-4 md:gap-6;
		@apply md:w-screen md:h-full;
		@apply md:p-6;

		@apply grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8;
		@apply lg:grid-cols-2 lg:grid-rows-2;
		@apply lg:w-screen lg:h-screen;
		@apply lg:p-12;
	}
</style>
