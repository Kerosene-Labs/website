<script lang="ts">
	import LandingCardGroup from '$lib/components/cardGroups/LandingCardGroup.svelte';
	import MembersCardGroup from '$lib/components/cardGroups/MembersCardGroup.svelte';
	import ProjectCardGroup from '$lib/components/cardGroups/ProjectCardGroup.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import PageSection from '$lib/components/layout/PageSection.svelte';
	import { PageSectionType } from '$lib/util/pageSection';

	if (typeof window !== 'undefined') {
		document.title = 'Kerosene Labs';
	}
</script>

<PageSection type={PageSectionType.LANDING}>
	<CenterContainer>
		<LandingCardGroup />
	</CenterContainer>
</PageSection>
<PageSection type={PageSectionType.PROJECTS}>
	<CenterContainer>
		<div class="sm:w-5/6 lg:w-1/2">
			<ProjectCardGroup />
		</div>
	</CenterContainer>
</PageSection>
<PageSection type={PageSectionType.MEMBERS}>
	<CenterContainer>
		<MembersCardGroup />
	</CenterContainer>
</PageSection>

<style lang="postcss">
</style>
