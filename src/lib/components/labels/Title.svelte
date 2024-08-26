<script lang="ts">
	export let text: string;
</script>

<h1 class="title">
	{text}
</h1>

<style lang="postcss">
	h1.title {
		@apply text-center font-bold text-gray-700;
		@apply text-5xl;
		@apply md:text-7xl;
	}
</style>
