<script lang="ts">
	import ProjectCard from '../cards/ProjectCard.svelte';

	enum ProjectTypes {
		KINDLING,
		ATC,
		ESPRESSO
	}

	function scrollToProject() {
		
	}
</script>

<div class="group">
	<h1 class="title">Some Of Our Projects</h1>
	<div class="projects">
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
	div.group {
		@apply sm:flex sm:flex-col sm:gap-8;
		@apply lg:flex lg:gap-12;
	}
	h1.title {
		@apply text-5xl font-bold;
		@apply text-gray-700;
		@apply text-center;
	}
    div.projects {
        @apply sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-8;
        @apply lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-12;
    }
</style>
