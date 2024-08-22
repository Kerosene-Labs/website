<script lang="ts">
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
			<div class="flex flex-1 flex-row gap-4 md:w-3/4 lg:w-1/2">
				<Button
					text="Our Projects"
					on:click={() => {
						document
							.getElementById('projectCards')
							?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
					}}
				></Button>
				<Button
					text="GitHub"
					role="secondary"
					on:click={() => {
						window.open('https://github.com/Kerosene-Labs');
					}}
				></Button>
			</div>
		</div>
	</div>
	<div class="flex h-screen items-center justify-center overflow-clip" id="projectCards">
		<div class="project-cards">
			<div>
				<ProjectCard
					name="Kindling"
					description="The fuel that'll ignite your application. A programmable TLS HTTP/1.1 server with no dependencies."
					repoUrl="https://github.com/Kerosene-Labs/kindling"
				></ProjectCard>
			</div>
			<div>
				<ProjectCard
					name="ATC"
					description="An API gateway with scoped access management for organizations that don't enjoy vendor lock-in."
					repoUrl="https://github.com/Kerosene-Labs/atc"
				></ProjectCard>
			</div>
			<div class="lg:col-span-2">
				<ProjectCard
					name="Espresso"
					description="Build Java applications without fighting your build tool. Drink some espresso. "
					repoUrl="https://github.com/Kerosene-Labs/espresso"
				></ProjectCard>
			</div>
			<Button
				text="Our Team"
				role="secondary"
				on:click={() => {
					document
						.getElementById('aboutUsCards')
						?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
				}}
			></Button>
		</div>
	</div>
	<div class="about-us-cards h-screen overflow-clip" id="aboutUsCards">
		<div class="flex flex-col gap-2">
			<h1>Our Team</h1>
			<p>They're what makes us special.</p>
		</div>
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
		@apply md:h-3/4 md:w-3/4;
		@apply lg:h-1/4 lg:w-1/4;
		@apply drop-shadow-xl;
		@apply mb-6;
	}

	.landingCard {
		@apply rounded-lg bg-inherit;
		@apply lg:p-8;
		@apply w-full;
		@apply flex flex-col items-center gap-3;
	}

	h1 {
		@apply text-center text-6xl font-bold text-gray-700;
	}

	p {
		@apply text-center text-3xl font-medium text-gray-500;
	}

	.page {
		@apply mt-12;
		@apply flex w-full flex-col items-center;
	}
	.project-cards {
		@apply grid;
		@apply sm:w-3/4 sm:grid-cols-1 sm:grid-rows-4;
		@apply lg:w-1/2 lg:grid-cols-2 lg:grid-rows-2 lg:gap-12;
	}
	.about-us-cards {
		@apply lg:w-1/2;
		@apply p-6;
		@apply flex flex-col items-center gap-12;
	}
</style>
