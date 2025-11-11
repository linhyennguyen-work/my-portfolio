<script lang="ts">
	import Icon from '@iconify/svelte';
	export let text: string = '';
	export let actionContent: string = '';
</script>

<p class="mt-3 text-4xl font-medium text-primary {$$props.class}">
	{text}
	<a href="./" class="group font-bold">
		{actionContent}
		<Icon
			class="inline transition-transform duration-300 group-hover:translate-x-2"
			icon="mingcute:arrow-right-fill"
		></Icon>
	</a>
</p>
