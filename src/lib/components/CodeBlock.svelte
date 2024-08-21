<script lang="ts">
	export let content: string;
</script>

<div class="codeBlock">{content}</div>

<style lang="postcss">
	.codeBlock {
		@apply bg-gray-900;
	}
</style>
