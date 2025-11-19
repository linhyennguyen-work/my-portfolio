<script lang="ts">
	export let title: string = '';
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

	function capitalizeWords(str: string) {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	$: capitalizedTitle = capitalizeWords(title);
</script>

<div class={`mt-5 flex ${isArray ? 'flex-col' : 'flex'}`}>
	<!-- Title -->
	<div class="font-medium text-primary">
		<span>[{capitalizedTitle}] :</span>
	</div>

	<!-- Content -->
	{#if isArray}
		<ul class="mt-2 ml-5 list-disc pl-10">
			{#each content as item}
				<li class="mb-1">{item}</li>
			{/each}
		</ul>
	{:else}
		<span class="ml-2 italic">{content}</span>
	{/if}
</div>
