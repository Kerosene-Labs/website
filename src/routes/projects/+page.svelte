<script>
	import ProjectCardGroup from '$lib/components/cardGroups/ProjectCardGroup.svelte';
	import CenterContainer from '$lib/components/layout/CenterContainer.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
</script>

<Navbar />
<div class="md:pt-20">
	<CenterContainer>
		<ProjectCardGroup />
	</CenterContainer>
</div>
