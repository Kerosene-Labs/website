<script>
	import ProjectCardGroup from '$lib/components/cardGroups/ProjectCardGroup.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import PageSection from '$lib/components/layout/PageSection.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
</script>

<Navbar></Navbar>
<PageSection>
	<CenterContainer>
		<ProjectCardGroup></ProjectCardGroup>
	</CenterContainer>
</PageSection>
