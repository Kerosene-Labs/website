<script lang="ts">
	export let url: string;
	export let text: string;
</script>

<a href={url} class="btn">
	<p>{text}</p>
</a>

<style lang="postcss">
	.btn {
		@apply bg-gray-700 p-4 rounded-3xl;
		@apply border border-gray-600;
		@apply text-gray-100 font-medium text-xl;
		@apply hover:bg-gray-600 hover:border-gray-500;
		@apply transition-all;
		@apply w-fit;
		@apply text-clip text-nowrap;
	}
</style>
