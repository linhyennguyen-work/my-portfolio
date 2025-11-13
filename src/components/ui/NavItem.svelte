<script lang="ts">
	export let label: string = '';
	export let href = '#';
	export let onClick: () => void = () => {};
</script>

<a
	onclick={onClick}
	{href}
	class="tracking-tights group inline-flex content-center items-center gap-2 rounded-full px-4 py-4 font-medium text-primary transition select-none hover:text-secondary xl:text-lg {$$props.class}"
>
	<span class=" inline-block transform transition-transform duration-200 group-hover:translate-x-2"
		>[</span
	>
	<span>{label}</span>
	<span class="inline-block transform transition-transform duration-200 group-hover:-translate-x-2"
		>]</span
	>
</a>
