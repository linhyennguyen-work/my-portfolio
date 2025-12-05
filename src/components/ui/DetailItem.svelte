<script lang="ts">
	export let title: any = '';
	export let content: string | string[];

	$: isArray = Array.isArray(content);

	function isUrl(str: string) {
		try {
			new URL(str);
			return true;
		} catch {
			return false;
		}
	}
</script>

<div class={`mt-5 flex text-sm md:text-base 2xl:text-lg ${isArray ? 'flex-col' : 'flex'}`}>
	<!-- Title -->
	<div class="font-medium text-primary">
		<span>{title} :</span>
	</div>

	<!-- Content -->
	{#if isArray}
		<ul class="mt-2 ml-5 list-disc pl-10 text-primary">
			{#each content as item}
				<li class="mb-1">{item}</li>
			{/each}
		</ul>
	{:else}
		<span class="ml-2 text-primary italic">{content}</span>
	{/if}
</div>
