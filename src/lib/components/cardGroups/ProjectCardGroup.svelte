<script lang="ts">
	import { PageSectionType, scrollTo } from '$lib/util/pageSection';
	import { TitleSize } from '$lib/util/text';
	import Button from '../buttons/Button.svelte';
	import ProjectCard from '../cards/ProjectCard.svelte';
	import Title from '../labels/Title.svelte';

	enum ProjectTypes {
		KINDLING,
		ATC,
		ESPRESSO
	}

	function scrollToProject() {}
</script>

<div class="group">
	<div class="flex flex-col gap-2">
		<Title text="Our Projects" size={TitleSize.SMALL} />
		<p class="subtitle">We like building things that help.</p>
	</div>
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

<style lang="postcss">
	div.group {
		@apply sm:flex sm:flex-col sm:gap-8;
		@apply lg:flex lg:gap-12;
		@apply w-full;
	}
	h1.title {
		@apply text-5xl font-bold;
		@apply text-gray-700;
		@apply text-center;
	}
	p.subtitle {
		@apply text-center text-3xl font-medium text-gray-500;
	}
	div.carousel {
		@apply flex overflow-auto rounded-2xl bg-slate-400/50 shadow-inner;
		@apply p-12;
	}
	div.carouselItems {
		@apply flex flex-row gap-5;
	}
	div.carouselItem {
		@apply flex-grow;
	}
</style>
