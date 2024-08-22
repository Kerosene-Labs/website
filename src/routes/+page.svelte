<script>
	import LandingCard from '$lib/components/cards/LandingCard.svelte';
	import MemberCard from '$lib/components/cards/MemberCard.svelte';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
</script>

<div class="page">
	<div class="h-screen w-1/2">
		<LandingCard></LandingCard>
	</div>
	<div class="h-screen project-cards" id="projectCards">
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
			name="Espresso"
			description="Build Java applications without fighting your build tool. Drink some espresso. "
			repoUrl="https://github.com/Kerosene-Labs/espresso"
		></ProjectCard>
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
	.page {
		@apply mt-12;
		@apply flex flex-col items-center w-full;
	}
	.project-cards {
		@apply pt-24;
		@apply lg:w-1/2;
		@apply flex flex-col items-center gap-12;
	}
	.about-us-cards {
		@apply pt-24;
		@apply lg:w-1/2;
		@apply flex flex-col items-center gap-12;
	}
</style>
