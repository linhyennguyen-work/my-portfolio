<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string = '';
	export let onClick: () => void = () => {
		console.log('IconButton clicked');
	};
</script>

<button
	onclick={onClick}
	class="t cursor-pointer px-4 py-4 text-xl text-primary hover:text-secondary"
>
	<Icon {icon} class={['text-primary', 'hover:text-secondary', $$props.class].join(' ')} />
</button>
