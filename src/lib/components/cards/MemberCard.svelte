<script lang="ts">
	export let name: string;
	export let position: string;
	export let description: string;
	export let memberPhotoUrl: string;
</script>

<div class="card">
	<div class="flex flex-row gap-6">
		<img src={memberPhotoUrl} alt={name + ' photo'} class="memberImage" />
		<div class="flex flex-col justify-center">
			<h1>{name}</h1>
			<p class="position">{position}</p>
			<p class="description">{description}</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply bg-orange-100 rounded-3xl p-10;
		@apply transition-all duration-[350ms];
		@apply hover:bg-orange-200;
	}

	.memberImage {
		@apply rounded-full drop-shadow-md;
		@apply w-[8rem] h-[8rem];
	}

	h1 {
		@apply text-gray-600 font-bold text-4xl;
	}

	.position {
		@apply text-gray-400 font-medium text-3xl;
		@apply pb-2;
	}

	.description {
		@apply text-gray-500/40 font-medium text-xl;
	}
</style>
