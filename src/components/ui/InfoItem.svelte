<script lang="ts">
	export let title: string = '';
	export let content: string = '';
	export let classTitle = '';
	export let classContent = '';
	export let isReverse: boolean = false;
</script>

<div>
	{#if !isReverse}
		<p class="text-5xl font-bold text-primary {classTitle}">{title}</p>
		<p class="mt-2 text-xl font-medium text-secondary {classContent}">{content}</p>
	{:else}
		<p class="text-xl font-medium text-secondary {classTitle}">{title}</p>
		<p class="mt-2 text-4xl font-bold text-primary {classContent}">{content}</p>
	{/if}
</div>
