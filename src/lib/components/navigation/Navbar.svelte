<script lang="ts">
	import NavbarButton from './NavbarButton.svelte';
	import NavbarContent from './NavbarContent.svelte';

	let isDrawerOpen: boolean = false;
</script>

<div class="navbar-container">
	<div class="navbar">
		<!-- only show navbar on small screens -->
		<div class="w-min h-min flex md:hidden">
			<NavbarButton
				on:click={() => {
					isDrawerOpen = !isDrawerOpen;
				}}
			/>
		</div>
		<!-- responsive drawer/flex row -->
		<NavbarContent {isDrawerOpen}>
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/members">Members</a>
		</NavbarContent>
	</div>
</div>

<style lang="postcss">
	.navbar {
		@apply bg-neutral-100 p-4 rounded-[-10px];
		@apply transition-all;
	}
	.navbar-container {
		@apply w-screen p-0 z-50;
		@apply fixed;
		@apply transition-all;
	}
</style>
