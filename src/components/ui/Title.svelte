<script lang="ts">
	export let text: string = '';
</script>

<div
	class="tracking-tights group inline-flex content-center items-center gap-2 rounded-full px-4 py-4 text-xl font-medium text-primary transition select-none {$$props.class}"
>
	<span class=" inline-block">[</span>
	<span>{text}</span>
	<span class="inline-block">]</span>
</div>
