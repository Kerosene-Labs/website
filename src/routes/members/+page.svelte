<script>
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import MembersCardGroup from '$lib/components/cardGroups/MembersCardGroup.svelte';
</script>

<Navbar></Navbar>
<div class="md:pt-20">
	<CenterContainer>
		<MembersCardGroup></MembersCardGroup>
	</CenterContainer>
</div>
