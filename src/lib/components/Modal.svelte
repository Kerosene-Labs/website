<script lang="ts">
	import { onMount } from "svelte";

    onMount(() => {
        history.pushState("Projects", "/projects");
    })
</script>

<div class="modal">
    <slot/>
</div>

<style lang="postcss">
    .modal {
        @apply z-50;
        @apply backdrop-blur-lg;
        @apply absolute;
        @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
        @apply bg-gray-700/70;
    }
</style>