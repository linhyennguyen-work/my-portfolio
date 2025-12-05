<script lang="ts">
	export let title: any = '';
	export let content: string | string[];
	export let isLink: boolean = false;

	$: isArray = Array.isArray(content);
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
	{:else if isLink}
		<a target="_blank" href={content as string} class="ml-2 text-primary italic">{content} </a>
	{:else}
		<span class="ml-2 text-primary italic">{content}</span>
	{/if}
</div>
