<script lang="ts">
</script>

<button on:click class="btn btn-navbar">
	<svg class="logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M4 18H10" stroke-width="2" stroke-linecap="round"/>
		<path d="M4 12L16 12" stroke-width="2" stroke-linecap="round"/>
		<path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"/>
		</svg>
</button>

<style lang="postcss">
	.btn {
		@apply select-none;
	}
	.logo {
		@apply w-11 h-11 stroke-neutral-300 hover:stroke-neutral-400 active:stroke-neutral-400 focus:stroke-neutral-400;
		@apply transition-all;
	}
</style>
