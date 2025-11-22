<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string = '';
	export let onClick: () => void = () => {
		console.log('IconButton clicked');
	};
</script>

<button
	onclick={onClick}
	class="t cursor-pointer px-4 py-4 text-xl text-primary hover:text-secondary {$$props.classButton}"
>
	<Icon {icon} class={['text-primary', 'hover:text-secondary', $$props.classIcon].join(' ')} />
</button>
