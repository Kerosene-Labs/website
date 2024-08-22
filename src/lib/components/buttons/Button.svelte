<script lang="ts">
	export let text: string;
</script>

<button on:click class="btn">
	{text}
</button>

<style lang="postcss">
	.btn {
		@apply bg-gray-700 p-4 rounded-3xl;
		@apply text-gray-100 font-medium text-xl;
		@apply hover:bg-orange-600;
		@apply transition-all;
		@apply w-fit;
		@apply text-clip text-nowrap;
		@apply select-none;
	}
</style>
