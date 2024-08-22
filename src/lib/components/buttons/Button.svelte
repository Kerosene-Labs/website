<script lang="ts">
	export let text: string;
	export let role: string = 'primary';
</script>

{#if role === 'primary'}
	<button on:click class="btn btn-primary">
		{text}
	</button>
{/if}
{#if role === 'secondary'}
	<button on:click class="btn btn-secondary">
		{text}
	</button>
{/if}

<style lang="postcss">
	.btn {
		@apply transition-all;
		@apply h-min w-full;
		@apply text-clip text-nowrap;
		@apply select-none;
	}
	.btn-primary {
		@apply rounded-3xl bg-orange-500 p-4;
		@apply text-xl font-medium text-gray-100;
		@apply hover:bg-amber-500;
	}
	.btn-secondary {
		@apply rounded-3xl bg-neutral-800 p-4;
		@apply text-xl font-medium text-gray-100;
		@apply hover:bg-gray-600;
	}
</style>
