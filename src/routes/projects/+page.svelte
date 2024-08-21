<script lang="ts">
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<!-- <NavigationBar></NavigationBar> -->
<div class="page">
	<ProjectCard
		name="Kindling"
		description="The fuel that'll ignite your application. A programmable TLS HTTP/1.1 server with no dependencies."
		repoUrl="https://github.com/Kerosene-Labs/kindling"
		openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/kindling"
	></ProjectCard>
	<ProjectCard
		name="ATC"
		description="An API gateway with scoped access management for organizations that don't enjoy vendor lock-in."
		repoUrl="https://github.com/Kerosene-Labs/atc"
		openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/atc"
	></ProjectCard>
	<ProjectCard
		name="Arg"
		description="The Argument Parser (arg) framework provides a clean and efficient way of handling command line arguments."
		repoUrl="https://github.com/Kerosene-Labs/arg"
		openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/arg"
	></ProjectCard>
	<ProjectCard
		name="Espresso"
		description="Build Java applications without fighting your build tool. Drink some espresso."
		repoUrl="https://github.com/Kerosene-Labs/espresso"
		openGraphImageUrl="https://opengraph.githubassets.com/1/Kerosene-Labs/espresso"
	></ProjectCard>
</div>

<style lang="postcss">
	.page {
		@apply grid grid-cols-2 grid-rows-2 gap-2;
		@apply w-screen h-screen;
		@apply overflow-hidden;
	}
</style>
