<script lang="ts">
	import LandingCard from '$lib/components/cards/LandingCard.svelte';
	import MemberCard from '$lib/components/cards/MemberCard.svelte';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import Button from '$lib/components/buttons/Button.svelte';

	if (typeof window !== 'undefined') {
		document.title = 'Kerosene Labs';
	}
</script>

<div class="page">
	<div class="h-screen w-1/2" id="landingCard">
		<div class="landingCard">
			<img
				class="landingImage"
				src="kerosene_logo_transparent.png"
				alt="Kerosene Labs logo transparent"
			/>
			<h1>Kerosene Labs</h1>
			<p>Creating vendor independent solutions for micro or macro organizations.</p>
			<Button
				text="Our Projects"
				on:click={() => {
					document
						.getElementById('projectCards')
						?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
				}}
			></Button>
		</div>
		<LandingCard></LandingCard>
	</div>
	<div class="h-screen project-cards" id="projectCards">
		<div class="project-cards-row">
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
		</div>
		<div class="project-cards-row">
			<ProjectCard
				name="Espresso"
				description="Build Java applications without fighting your build tool. Drink some espresso. "
				repoUrl="https://github.com/Kerosene-Labs/espresso"
			></ProjectCard>
		</div>
	</div>
	<div class="h-screen about-us-cards">
		<MemberCard
			name="Hunter LaFaille"
			position="Founder"
			description="I build stuff that solves problems I find interesting."
			memberPhotoUrl="/memberPhotos/hlafaille.jpeg"
		></MemberCard>
	</div>
</div>

<style lang="postcss">
	.landingImage {
		@apply md:w-3/4 md:h-3/4;
		@apply lg:w-1/4 lg:h-1/4;
		@apply drop-shadow-xl;
		@apply mb-6;
	}

	.landingCard {
		@apply bg-inherit rounded-lg;
		@apply p-8;
		@apply w-full;
		@apply flex flex-col items-center gap-3;
	}

	h1 {
		@apply text-gray-700 font-bold text-6xl text-center;
	}

	p {
		@apply text-gray-500 font-medium text-3xl text-center;
	}

	.page {
		@apply mt-12;
		@apply flex flex-col items-center w-full;
	}
	.project-cards {
		@apply lg:w-1/2;
		@apply md:p-12;
		@apply justify-center;
		@apply flex flex-col gap-6;
	}
	.project-cards-row {
		@apply flex flex-row gap-6;
	}
	.about-us-cards {
		@apply lg:w-1/2;
		@apply flex flex-col items-center gap-12;
	}
</style>
