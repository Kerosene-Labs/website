<script lang="ts">
	export let text: string;
	export let url: string;
</script>

<a href={url} class="navbar-item">
	{text}
</a>

<style lang="postcss">
	.navbar-item {
		@apply bg-inherit hover:bg-neutral-200;
		@apply p-4;
		@apply active:bg-inherit;
		@apply transition-all;
		@apply h-full;

		@apply text-4xl font-medium;
		@apply md:text-xl;
	}
</style>
