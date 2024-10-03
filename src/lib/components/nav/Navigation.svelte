<script lang="ts">
	import { onMount } from 'svelte';
	import { draw } from 'svelte/transition';

	const navItems = [
		{ text: 'Home', href: '/' },
		{ text: 'Projects', href: '/projects' },
		{ text: 'About Us', href: '/about-us' },
		{ text: 'Contact', href: '/contact' }
	];

	let drawerOpen: boolean = false;

	onMount(() => {
		function typeText(elementId: string, text: string, delay = 50) {
			const terminalElement = document.getElementById(elementId);
			let index = 0;

			function type() {
				if (index < text.length) {
					terminalElement!.innerHTML += text.charAt(index);
					index++;
					setTimeout(type, delay); // Delay between each character
				}
			}

			type();
		}

		const textToType = `Kerosene Labs`;
		typeText('terminal', textToType, 100); // Adjust delay for typing speed
	});
</script>

<!-- Mobile Nav -->
<div id="mobileNavBar" class="z-50 block lg:hidden">
	<div class="w-full bg-neutral-100 p-2">
		<!-- <p class="mr-auto text-3xl font-light text-neutral-300">☰</p> -->
		<button
			class="flex items-center justify-center"
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

<div
	id="mobileNavDrawer"
	class="absolute z-40 block h-full w-[80%] translate-x-[-100%] bg-gray-200 backdrop-blur-lg transition-all sm:w-[40%] md:w-[30%] lg:hidden"
	class:drawer-open={drawerOpen}
>
	<p>Test</p>
</div>

<button
	id="mobileNavDrawerBg"
	class="pointer-events-none absolute block h-screen w-screen bg-neutral-800 opacity-0 transition-opacity lg:hidden"
	class:drawer-open={drawerOpen}
	on:click={() => {
		drawerOpen = !drawerOpen;
	}}
></button>

<!-- Desktop Nav -->
<div id="desktopNavBar" class="hidden lg:block">
	<div class="flex flex-row">
		<a id="terminal" href="/" class="flex flex-row items-center justify-center gap-2 p-4 text-xl font-semibold">
			<img src="/kerosene_logo_transparent.png" alt="Kerosene Logo" class="size-8" />
		</a>
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
		@apply pointer-events-auto opacity-50;
	}

	#mobileNavDrawer.drawer-open {
		@apply translate-x-[0%];
	}
</style>
