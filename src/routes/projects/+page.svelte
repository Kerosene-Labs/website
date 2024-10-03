<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/buttons/Button.svelte';
	import ProjectSection from '$lib/components/cards/ProjectSection.svelte';
</script>

<title>Projects - Kerosene Labs</title>

<div class="flex w-full max-w-[70rem] flex-col">
	<div class="flex h-screen items-center">
		<ProjectSection
			title="Espresso"
			body="An experimental Java build tool designed for modern development. Espresso is simple, portable and reliable. You wouldn't use a sledgehammer to hang a picture frame, would you?"
		>
			<div class="flex flex-row gap-4">
				<Button role="secondary" text="Visit Registry" on:click={() => {goto("/projects/espresso/registry")}}/>
				<Button text="View Code" />
			</div>
		</ProjectSection>
	</div>
	<div class="flex h-screen items-center">
		<ProjectSection
			title="Kindling"
			body="A programmable TLS HTTP/1.1 server written in modern Java with zero dependencies. No hidden magic, visible control flow, and virtual threads. The fuel that'll ignite your application."
		/>
	</div>
	<div class="flex h-screen items-center">
		<ProjectSection
			title="ATC"
			body="Air Traffic Controller (ATC); an API gateway designed from the ground up to be vendor independent. Built with Kindling."
		/>
	</div>
</div>
