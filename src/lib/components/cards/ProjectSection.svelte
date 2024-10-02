<script lang="ts">
	export let title: string;
    export let body: string;
</script>

<div class="p-12 rounded-lg flex flex-col gap-4 h-screen">
    <h1 class="font-sans text-3xl font-bold text-neutral-800 lg:text-5xl">{title}</h1>
    <p class="font-sans text-xl font-semibold text-neutral-500 lg:text-2xl">{body}</p>
</div>