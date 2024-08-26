<script lang="ts">
	import NavbarButton from './NavbarButton.svelte';
	import NavbarContent from './NavbarContent.svelte';
	import NavbarLink from './NavbarLink.svelte';

	let isDrawerOpen: boolean = false;
</script>

<div class="navbar-container">
	<div class="navbar">
		<!-- only show navbar on small screens -->
		<div class="flex w-min md:hidden">
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
		@apply rounded-[-10px] bg-neutral-100;
		@apply transition-all;
	}
	.navbar-container {
		@apply h-min w-full;
		@apply transition-all;
	}
</style>
