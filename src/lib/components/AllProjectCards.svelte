<script>
	import ProjectCard from './cards/ProjectCard.svelte';
</script>

<div class="projectCards h-full">
	<ProjectCard
		name="Kindling"
		description="The fuel that'll ignite your application. A programmable TLS HTTP/1.1 server with no dependencies."
		repoUrl="https://github.com/Kerosene-Labs/kindling"
	></ProjectCard>
	<ProjectCard
		name="ATC"
		description="An API gateway with scoped access management for organizations that don't enjoy vendor lock-in."
		repoUrl="https://github.com/Kerosene-Labs/atc"
	></ProjectCard>
	<ProjectCard
		name="Arg"
		description="The Argument Parser (arg) framework provides a clean and efficient way of handling command line arguments."
		repoUrl="https://github.com/Kerosene-Labs/arg"
	></ProjectCard>
	<ProjectCard
		name="Espresso"
		description="Build Java applications without fighting your build tool. Drink some espresso."
		repoUrl="https://github.com/Kerosene-Labs/espresso"
	></ProjectCard>
</div>

<style lang="postcss">
	.projectCards {
		@apply flex flex-col gap-6 overflow-y-auto p-4;
	}
</style>
