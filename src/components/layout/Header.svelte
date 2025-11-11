<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../ui/Button.svelte';
	import IconButton from '../ui/IconButton.svelte';
	import NavItem from '../ui/NavItem.svelte';

	function goContact() {
		goto('/contact');
	}
</script>

<header class="w-full">
	<nav
		class="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-8"
		aria-label="Main navigation"
	>
		<a class="text-5xl font-black text-primary italic" href="./" aria-label="Logo">LYN</a>
		<div class="flex items-center justify-between gap-4">
			<ul class="m-0 flex list-none gap-6 p-0">
				<li><NavItem label="Home" href="./" /></li>
				<li><NavItem label="About" href="/about" /></li>
				<li><NavItem label="Projects" href="/projects" /></li>
			</ul>
			<div class="m-0 flex list-none gap-2 p-0">
				<IconButton icon="mingcute:sun-line"></IconButton>
				<IconButton icon="mingcute:palette-line"></IconButton>
				<IconButton icon="circle-flags:lang-vi"></IconButton>
			</div>
			<Button onClick={goContact} label="Get in Touch"></Button>
		</div>
	</nav>
</header>
