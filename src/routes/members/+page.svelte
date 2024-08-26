<script>
	import PageSection from '$lib/components/layout/PageSection.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import MembersCardGroup from '$lib/components/cardGroups/MembersCardGroup.svelte';
</script>

<Navbar></Navbar>
<PageSection>
	<CenterContainer>
		<MembersCardGroup></MembersCardGroup>
	</CenterContainer>
</PageSection>
