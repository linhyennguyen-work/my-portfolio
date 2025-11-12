<script lang="ts">
	export let title: string = '';
	export let content: string = '';
	export let isReverse: boolean = false;
</script>

<div class="flex items-center justify-between lg:block">
	{#if !isReverse}
		<p
			class="inline text-4xl
					font-bold text-primary md:text-5xl
					lg:block
					lg:text-4xl
					xl:text-5xl
					2xl:text-5xl"
		>
			{title}
		</p>
		<p
			class="mt-2 inline text-xl font-medium text-secondary md:text-2xl
					lg:block
					lg:text-xl
					xl:text-xl
					2xl:text-xl"
		>
			{content}
		</p>
	{:else}
		<p class="text-xl font-medium text-secondary">{title}</p>
		<p class="mt-2 text-4xl font-bold text-primary">{content}</p>
	{/if}
</div>
