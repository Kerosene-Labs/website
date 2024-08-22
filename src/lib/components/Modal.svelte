<script lang="ts">
	import { pushState } from '$app/navigation';
	import { onMount } from 'svelte';
	export let title: string;
	export let isVisible: boolean;
</script>

<div class="modal">
	<div class="modalBody">
		<div class="flex flex-row">
			<h1 class="modalTitle">{title}</h1>
            <button on:click={() => {isVisible = !isVisible}} class="ml-auto self-center font-bold text-2xl text-gray-400">X</button>
		</div>
        <slot />
	</div>
</div>

<style lang="postcss">
	.modal {
		@apply z-50;
		@apply w-screen h-screen;
		@apply backdrop-blur-lg;
		@apply absolute;
		@apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
		@apply bg-gray-700/80;
		@apply flex items-center justify-center;
	}
	.modalBody {
		@apply w-full h-1/2 max-w-[50rem];
		@apply m-8;
		@apply bg-gray-200;
		@apply border border-gray-100;
		@apply rounded-3xl;
		@apply drop-shadow-sm;
		@apply p-6;
		@apply overflow-hidden;
	}
	.modalTitle {
		@apply text-gray-600 font-bold text-4xl;
	}
</style>
