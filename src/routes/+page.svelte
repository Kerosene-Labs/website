<script lang="ts">
	import LandingCard from '$lib/components/cards/LandingCard.svelte';
	import PageSection from '$lib/components/PageSection.svelte';

	if (typeof window !== 'undefined') {
		document.title = 'Kerosene Labs';
	}
</script>

<PageSection name="landing">
	<div class="flex h-full items-center justify-center">
		<LandingCard scrollToFunction={null} />
	</div>
</PageSection>
<PageSection name="projects">
	<h1>Test</h1>
</PageSection>
<PageSection name="members">
	<h1>Test</h1>
</PageSection>

<style lang="postcss">
</style>
