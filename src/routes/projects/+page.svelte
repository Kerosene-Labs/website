<script>
	import ProjectSection from '$lib/components/cards/ProjectSection.svelte';
</script>

<title>Projects - Kerosene Labs</title>

<div class="flex flex-col w-full">
	<ProjectSection
		title="Espresso"
		body="An experimental Java build tool designed for modern development. Espresso is simple, portable and reliable. You wouldn't use a sledgehammer to hang a picture frame, would you?"
	/>
	<ProjectSection
		title="Kindling"
		body="A programmable TLS HTTP/1.1 server written in modern Java with zero dependencies. No hidden magic, visible control flow, and virtual threads. The fuel that'll ignite your application."
	/>
	<ProjectSection
		title="ATC"
		body="Air Traffic Controller (ATC); an API gateway designed from the ground up to be vendor independent. Built with Kindling."
	/>
</div>
