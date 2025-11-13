<script lang="ts">
	export let title: string = '';
	export let content: string = '';
	export let isReverse: boolean = false;
</script>

{#if !isReverse}
	<div class="flex items-center justify-between lg:block">
		<p
			class="inline text-3xl
					font-bold text-primary md:text-5xl
					lg:block
					lg:text-4xl
					xl:text-5xl
					2xl:text-5xl"
		>
			{title}
		</p>
		<p
			class="mt-2 inline text-lg font-medium text-secondary md:text-2xl
					lg:block
					lg:text-xl
					xl:text-xl
					2xl:text-xl"
		>
			{content}
		</p>
	</div>
{:else}
	<div
		class="flex flex-col items-start justify-between md:flex-row md:items-center md:justify-between lg:block"
	>
		<p class="text-base font-medium text-secondary">{title}</p>
		<p class="mt-2 text-lg font-bold text-primary lg:text-2xl xl:text-3xl 2xl:text-4xl">
			{content}
		</p>
	</div>
{/if}
