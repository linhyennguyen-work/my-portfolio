<script lang="ts">
	import Icon from '@iconify/svelte';
	export let text: string = '';
	export let actionContent: string = '';
	export let href: string = './';
	export let icon: string = '';
	export let target: string = '_self';
</script>

<div class=" mt-2 font-medium text-primary {$$props.class} ">
	{text}
	<a
		{href}
		{target}
		class="group mt-2 block font-bold text-primary lg:mt-0 lg:inline-flex lg:items-end"
	>
		{actionContent}
		<Icon
			class={['inline', 'transition-transform', 'duration-300', $$props.classIcon].join(' ')}
			{icon}
		></Icon>
	</a>
</div>
