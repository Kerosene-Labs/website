<script>
	import LandingCard from '$lib/components/LandingCard.svelte';
</script>

<div class="page">
	<div class="w-1/2">
		<LandingCard></LandingCard>
	</div>
</div>

<style lang="postcss">
	.page {
		@apply mt-12;
		@apply flex flex-col items-center w-full;
	}
</style>
