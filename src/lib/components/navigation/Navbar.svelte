<script lang="ts">
	import NavbarButton from './NavbarButton.svelte';
	import NavbarContent from './NavbarContent.svelte';
	import NavbarLink from './NavbarLink.svelte';

	let isDrawerOpen: boolean = false;
</script>

<div class="navbar-container">
	<div class="navbar">
		<!-- only show navbar on small screens -->
		<div class="w-min flex md:hidden">
			<NavbarButton
				on:click={() => {
					isDrawerOpen = !isDrawerOpen;
				}}
			/>
		</div>
		<!-- responsive drawer/flex row -->
		<NavbarContent {isDrawerOpen}>
			<NavbarLink text="Home" url="/" />
			<NavbarLink text="Projects" url="/projects" />
			<NavbarLink text="Members" url="/members" />
		</NavbarContent>
	</div>
</div>

<style lang="postcss">
	.navbar {
		@apply bg-neutral-100 rounded-[-10px];
		@apply transition-all;
	}
	.navbar-container {
		@apply w-screen z-50;
		@apply fixed;
		@apply transition-all;
	}
</style>
