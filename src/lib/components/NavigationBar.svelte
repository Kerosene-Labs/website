<script lang="ts">
</script>

<div id="navigationBar">
	<div class="navbar">
		<div class="navbarLogoSection">
			<img src="/kerosene_logo_transparent.png" alt="Kerosene Logo" width="40rem" height="40rem" />
			<h1 class="navbarLogoText">Kerosene Labs</h1>
		</div>
		<div class="navbarItemsSection">
			<a class="navbarItem" href="/kindling">Kindling</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.navbarLogoText {
		@apply text-3xl text-white font-semibold;
		@apply select-none;
	}
	.navbarItem {
		@apply text-2xl text-gray-100 font-semibold;
		@apply hover:text-gray-200;
		@apply transition-all;
	}
	.navbarLogoSection {
		@apply gap-6;
		@apply flex flex-row items-center;
	}
	.navbar {
		@apply bg-orange-500 rounded-md p-4 m-4;
		@apply drop-shadow-md;
		@apply border-orange-300 border-2;
		@apply flex flex-row items-center;
	}
	.navbarItemsSection {
		@apply pl-8;
		@apply gap-4 flex flex-row items-center;
	}
</style>
