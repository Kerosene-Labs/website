<script lang="ts">
	import MemberCard from '../cards/MemberCard.svelte';
	import Subtitle from '../labels/Subtitle.svelte';
	import Title from '../labels/Title.svelte';
</script>

<div class="flex flex-col gap-12">
	<div class="flex flex-col gap-2">
		<Title text="Our Team" />
		<Subtitle text="They're what makes us special." />
	</div>
	<MemberCard
		name="Hunter LaFaille"
		position="Founder"
		description="I build stuff that solves problems I find interesting."
		memberPhotoUrl="/memberPhotos/hlafaille.jpeg"
	></MemberCard>
</div>

<style lang="postcss">
	h1.title {
		@apply text-5xl font-bold;
		@apply text-gray-700;
		@apply text-center;
	}
	p.subtitle {
		@apply text-center text-3xl font-medium text-gray-500;
	}
</style>
