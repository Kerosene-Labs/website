<script lang="ts">
	import { draw } from 'svelte/transition';

	const navItems = [
		{ text: 'Home', href: '/' },
		{ text: 'Projects', href: '/projects' },
		{ text: 'About Us', href: '/about-us' },
		{ text: 'Contact', href: '/contact' }
	];

	let drawerOpen: boolean = false;

</script>

<!-- Mobile Nav -->
<div id="mobileNavBar" class="block lg:hidden z-50">
	<div class="w-full bg-neutral-100 p-2">
		<!-- <p class="mr-auto text-3xl font-light text-neutral-300">☰</p> -->
		<button class="items-center justify-center flex"
			on:click={() => {
				drawerOpen = !drawerOpen;
			}}
		>
			<svg
				class="size-10 stroke-neutral-300 transition-colors active:stroke-neutral-400"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 18H10" stroke-width="1.7" stroke-linecap="round" />
				<path d="M4 12L16 12" stroke-width="1.7" stroke-linecap="round" />
				<path d="M4 6L20 6" stroke-width="1.7" stroke-linecap="round" />
			</svg>
		</button>
	</div>
</div>

<div id="mobileNavDrawer" class="block lg:hidden bg-gray-200 transition-all translate-x-[-100%] w-[80%] sm:w-[40%] md:w-[30%] h-full absolute z-40 backdrop-blur-lg" class:drawer-open={drawerOpen}>
	<p>Test</p>
</div>


<button
	id="mobileNavDrawerBg"
	class="block lg:hidden absolute h-screen w-screen bg-neutral-800 opacity-0 pointer-events-none transition-opacity backdrop-blur-md"
	class:drawer-open={drawerOpen}
	on:click={() => {drawerOpen = !drawerOpen}}
></button>

<!-- Desktop Nav -->
<div id="desktopNavBar" class="hidden lg:block">
	<div class="flex flex-row">
		<a href="/" class="flex flex-row items-center justify-center gap-2 p-4 text-xl font-semibold">
			<img src="kerosene_logo_transparent.png" alt="Kerosene Logo" class="size-8" />
			Kerosene Labs</a
		>
		<div class="ml-auto flex flex-row gap-6 p-4">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-xl font-semibold text-neutral-800 transition-colors hover:text-orange-600"
					>{item.text}</a
				>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	#mobileNavDrawerBg.drawer-open {
		@apply opacity-50 pointer-events-auto;
	}

	#mobileNavDrawer.drawer-open {
		@apply translate-x-[0%];
	}
</style>
