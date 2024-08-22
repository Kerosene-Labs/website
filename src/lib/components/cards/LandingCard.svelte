<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import Modal from '../Modal.svelte';
	import ProjectCardsGrid from '../AllProjectCards.svelte';
	import { updateQueryParam } from '$lib/util/query';

	let isProjectModalVisible: boolean = false;

	onMount(() => {
		handleQueryParameterChange();
	});

	function handleQueryParameterChange() {
		if (typeof window !== 'undefined') {
			const params = new URLSearchParams(window.location.search);
			const modalType = params.get("modal");
			if (modalType === "projects") {
				isProjectModalVisible = true;
			}
		}
	}

	function setModalType(modalType: string) {
		updateQueryParam("modal", modalType);
		handleQueryParameterChange();
	}
</script>

{#if isProjectModalVisible}
	<Modal title="Our Projects" bind:isVisible={isProjectModalVisible}>
		<ProjectCardsGrid></ProjectCardsGrid>
	</Modal>
{/if}

<div class="landingCard">
	<img
		class="landingImage"
		src="kerosene_logo_transparent.png"
		alt="Kerosene Labs logo transparent"
	/>
	<h1>Kerosene Labs</h1>
	<p>Creating vendor independent solutions for micro or macro organizations.</p>
	<Button on:click={() => setModalType("projects")} text="What We Do"></Button>
</div>

<style lang="postcss">
	.landingImage {
		@apply md:w-3/4 md:h-3/4;
		@apply lg:w-1/4 lg:h-1/4;
		@apply drop-shadow-xl;
		@apply mb-6;
	}

	.landingCard {
		@apply bg-inherit rounded-lg;
		@apply p-8;
		@apply w-full;
		@apply flex flex-col items-center gap-3;
	}

	h1 {
		@apply text-gray-700 font-bold text-6xl text-center;
	}

	p {
		@apply text-gray-500 font-medium text-3xl text-center;
	}
</style>
