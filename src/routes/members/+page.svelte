<script>
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import MembersCardGroup from '$lib/components/cardGroups/MembersCardGroup.svelte';
</script>

<Navbar></Navbar>
<div class="w-screen pt-[6rem]">
	<CenterContainer>
		<MembersCardGroup></MembersCardGroup>
	</CenterContainer>
</div>
