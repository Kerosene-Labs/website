<script lang="ts">
	import RegistryCard from '$lib/components/cards/RegistryCard.svelte';
	import LineEdit from '$lib/components/inputs/LineEdit.svelte';

	let lineEditValue: string = '';
	let pageTitle: string = '';

	$: if (lineEditValue) {
		pageTitle = lineEditValue + ' - Espresso Registry - Kerosene Labs';
	} else {
		pageTitle = 'Espresso Registry - Kerosene Labs';
	}

	// API Querying
	let apiQueryError: string = '';
	async function queryRegistryApi(term: string): Promise<Array<any> | undefined> {
		apiQueryError = '';
		try {
			const apiUrl = import.meta.env.VITE_API_URL;
			const response = await fetch(`${apiUrl}?q=` + encodeURI(term), {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				apiQueryError = 'An error occured while querying the API: HTTP ' + response.status;
			}

			const data = await response.json(); // Parse the response as JSON
			return data; // Return the data
		} catch (error) {
			apiQueryError = 'An error occured while querying the API: ' + error;
		}
	}
	let apiResponse: Array<any> = [];
	$: queryRegistryApi(lineEditValue).then((data) => {
		apiResponse = data!;
	});
</script>

<title>{pageTitle}</title>
<div class="flex h-full flex-col items-center justify-center gap-4 text-center">
	<h1 class="font-sans text-4xl font-bold text-neutral-800 lg:text-7xl">The Espresso Registry</h1>
	<p
		class=" text-center font-sans text-xl font-semibold text-neutral-500 lg:max-w-[50rem] lg:text-2xl"
	>
		Search for packages to use in your next hit project.
	</p>
	<div class="flex h-min w-3/4 flex-row lg:w-1/2">
		<LineEdit placeholder="Type something cool... we'll find it." bind:value={lineEditValue} />
	</div>

	{#if lineEditValue}
		{#if apiQueryError}
			<div class="w-full rounded-lg border border-red-400 p-4">
				<p>{apiQueryError}</p>
			</div>
		{/if}
		{#if apiResponse}
			<p class="text-sm text-neutral-400">
				Searching registry at commit: 882be6a7e61d11d33dec508a789f009352a3e328
			</p>
		{/if}
		<div class="flex items-center">
			{#if apiResponse}
				<div class="grid w-full grid-cols-1 gap-8 p-4 lg:grid-cols-2">
					{#each apiResponse as group}
						{#each group.espressoPackages as pkg}
							<div class:single-registry-card={apiResponse.length === 1}>
								<RegistryCard
									title={pkg.name}
									group={group.name}
									body={pkg.packageDeclaration.description}
								/>
							</div>
						{/each}
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style lang="postcss">
	.single-registry-card {
		@apply col-span-2 w-full;
	}
</style>
