<script>
	import Button from '../buttons/Button.svelte';
</script>

<div class="flex flex-col items-center justify-center gap-6 text-center lg:max-w-[70rem]">
	<h1 class="font-sans text-4xl font-bold text-neutral-800 lg:text-7xl">
		Creating solutions for micro or macro organizations.
	</h1>
	<p class=" font-sans text-xl font-semibold text-neutral-500 lg:max-w-[50rem] lg:text-2xl">
		We're Kerosene Labs, a group of like minded individuals solving problems we find interesting.
	</p>
	<div class="w-1/2">
		<Button on:click={() => {window.open('https://github.com/Kerosene-Labs', '_blank')}} text="GitHub"/>
	</div>
</div>
