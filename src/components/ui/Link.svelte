<script lang="ts">
	import Icon from '@iconify/svelte';
	export let text: string = '';
	export let actionContent: string = '';
	export let href: string = './';
</script>

<div class=" font-medium text-primary {$$props.class}">
	{text}
	<a {href} class="group mt-2 block font-bold text-primary lg:mt-0 lg:inline">
		{actionContent}
		<Icon
			class="inline transition-transform duration-300 group-hover:translate-x-2"
			icon="mingcute:arrow-right-fill"
		></Icon>
	</a>
</div>
