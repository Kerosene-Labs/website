<script lang="ts">
	import LandingCardGroup from '$lib/components/cardGroups/LandingCardGroup.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';

	if (typeof window !== 'undefined') {
		document.title = 'Kerosene Labs';
	}
</script>

<Navbar></Navbar>
<div class="w-screen h-screen">
	<CenterContainer>
		<LandingCardGroup />
	</CenterContainer>
</div>
