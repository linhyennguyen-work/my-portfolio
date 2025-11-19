<script lang="ts">
	import { goto } from '$app/navigation';

	let hovered = false;
	function goContact() {
		goto('/contact');
	}
</script>

<div
	tabindex="0"
	role="button"
	class="relative mx-auto mt-6 ml-5 flex max-w-[1440px] cursor-pointer items-center justify-between overflow-hidden rounded-4xl bg-primary p-8 text-3xl font-medium text-surface md:text-4xl lg:text-5xl xl:p-10 xl:text-6xl 2xl:text-7xl"
	on:click={goContact}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? goContact() : null)}
>
	<div
		class="xl:display hidden transition-transform duration-700"
		style="transform: translateX({hovered ? '-150%' : '0'});"
	>
		Ready to Start ?
	</div>

	<div
		class="flex items-center gap-6 transition-transform duration-700"
		style="transform: translateX({hovered ? '-180%' : '0'});"
	>
		<span class="h-4 w-4 translate-y-1 rounded-full bg-surface"></span>
		<span>Get in Touch</span>
	</div>
</div>
