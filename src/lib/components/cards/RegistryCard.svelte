<script lang="ts">
	export let title: string = '';
	export let body: string = '';
	export let group: string = '';
</script>

<div class="flex h-full justify-center w-min">
	<div class="flex flex-col gap-4 rounded-lg bg-neutral-100 p-6 lg:p-12 justify-center">
		<div class="flex flex-row gap-4 items-center">
			<h1 class="font-sans text-2xl font-bold text-neutral-800 lg:text-5xl">{title}</h1>
			<p class="text-md text-neutral-400 font-mono">{group}</p>
		</div>
		<p class="font-sans text-ll font-semibold text-neutral-500 lg:text-2xl">{body}</p>
		<slot />
	</div>
</div>
