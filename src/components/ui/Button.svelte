<script lang="ts">
	export let label = '';
	export let onClick: () => void = () => {};
</script>

<button
	onclick={onClick}
	class="group relative inline-flex items-center gap-4 overflow-hidden rounded-4xl bg-primary px-6 py-3 font-medium text-surface lg:px-4 lg:py-3 xl:px-6 xl:py-4 {$$props.class}"
>
	<span class="h-2 w-2 rounded-full bg-surface"></span>
	<span class="relative h-8 overflow-hidden lg:h-6">
		<span class="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
			>{label}</span
		>
		<span
			class="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
		>
			{label}
		</span>
	</span>
</button>
