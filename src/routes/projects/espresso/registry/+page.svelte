<script lang="ts">
	import RegistryCard from '$lib/components/cards/RegistryCard.svelte';
	import LineEdit from '$lib/components/inputs/LineEdit.svelte';

	let lineEditValue: string = '';
</script>

<div class="flex h-full max-w-[50rem] flex-col items-center justify-center gap-4">
	<h1 class="font-sans text-4xl font-bold text-neutral-800 lg:text-7xl">The Espresso Registry</h1>
	<p class=" font-sans text-xl font-semibold text-neutral-500 lg:max-w-[50rem] lg:text-2xl">
		Search for packages to use in your next hit project.
	</p>
	<div class="flex h-min w-1/2 flex-row">
		<LineEdit placeholder="Kindling" bind:value={lineEditValue} />
	</div>

	{#if lineEditValue}
		<p class="text-sm text-neutral-400">
			Searching registry at commit: 882be6a7e61d11d33dec508a789f009352a3e328
		</p>
		<div class="flex max-h-96 flex-grow-0 flex-col gap-6 overflow-y-scroll">
			<RegistryCard
				title="kindling"
				group="com.kerosenelabs"
				body="A programmable TLS HTTP/1.1 server written in modern Java with zero dependencies. No hidden magic, visible control flow, and virtual threads. The fuel that'll ignite your application."
			/>
			<RegistryCard
				title="spring-web"
				group="org.springframework"
				body="Spring Web provides integration features such as multipart file upload functionality and the initialization of the IoC container using Servlet listeners and a web-oriented application context. It also contains an HTTP client and the web-related parts of Spring remote support."
			/>
			<RegistryCard
				title="lombok"
				group="org.projectlombok"
				body="Lombok is a Java library that provides annotations to simplify Java development by automating the generation of boilerplate code. Key features include automatic generation of getters, setters, equals, hashCode, and toString methods, as well as a facility for automatic resource management. It aims to reduce the amount of manual coding, thereby streamlining the codebase and reducing potential for errors. "
			/>
		</div>
	{/if}
</div>
