<script lang="ts">
	import ProjectCard from '../cards/ProjectCard.svelte';
	import Subtitle from '../labels/Subtitle.svelte';
	import Title from '../labels/Title.svelte';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<Title text="Our Projects" />
		<Subtitle text="We like building things that help." />
	</div>
	<div class="projects-list">
		<ProjectCard
			name="Kindling"
			description="The fuel that'll ignite your application. A programmable TLS HTTP/1.1 server with no dependencies."
			repoUrl="https://github.com/Kerosene-Labs/kindling"
		/>
		<ProjectCard
			name="ATC"
			description="An API gateway with scoped access management for organizations that don't enjoy vendor lock-in."
			repoUrl="https://github.com/Kerosene-Labs/atc"
		/>
		<ProjectCard
			name="Espresso"
			description="Build Java applications without fighting your build tool. Drink some espresso. "
			repoUrl="https://github.com/Kerosene-Labs/espresso"
		/>
	</div>
</div>

<style lang="postcss">
	.projects-list {
		@apply flex flex-col gap-6;
		@apply md:h-full md:flex-row;
	}
</style>
