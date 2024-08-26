<script lang="ts">
	export let text: string;
</script>

<div class="navbar-item"><p class="navbar-item">{text}</p></div>

<style lang="postcss">
	.navbar-item {
		@apply text-xl font-medium;
	}
</style>
