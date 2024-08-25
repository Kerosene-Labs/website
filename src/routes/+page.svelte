<script lang="ts">
	import LandingCardGroup from '$lib/components/cardGroups/LandingCardGroup.svelte';
	import MembersCardGroup from '$lib/components/cardGroups/MembersCardGroup.svelte';
	import ProjectCardGroup from '$lib/components/cardGroups/ProjectCardGroup.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import { PageSectionType } from '$lib/util/pageSection';

	if (typeof window !== 'undefined') {
		document.title = 'Kerosene Labs';
	}
</script>

<PageSection type={PageSectionType.LANDING}>
	<div class="center-container">
		<LandingCardGroup />
	</div>
</PageSection>
<PageSection type={PageSectionType.PROJECTS}>
	<div class="center-container">
		<div class="sm:w-5/6 lg:w-1/2">
			<ProjectCardGroup />
		</div>
	</div>
</PageSection>
<PageSection type={PageSectionType.MEMBERS}>
	<div class="center-container">
		<MembersCardGroup />
	</div>
</PageSection>

<style lang="postcss">
	div.center-container {
		@apply flex w-full h-full items-center justify-center;
	}
</style>
