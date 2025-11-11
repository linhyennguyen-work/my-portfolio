<script lang="ts">
	export let label: string = '';
	export let href = '#';
</script>

<a
	{href}
	class="tracking-tights group inline-flex content-center items-center gap-2 rounded-full px-4 py-4 font-medium text-primary transition select-none"
>
	<span class=" inline-block transform transition-transform duration-200 group-hover:translate-x-2"
		>[</span
	>
	<span>{label}</span>
	<span class="inline-block transform transition-transform duration-200 group-hover:-translate-x-2"
		>]</span
	>
</a>
