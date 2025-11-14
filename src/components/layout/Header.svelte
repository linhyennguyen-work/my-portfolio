<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import Button from '../ui/Button.svelte';
	import IconButton from '../ui/IconButton.svelte';
	import NavItem from '../ui/NavItem.svelte';

	let isMobileMenuOpen = false;

	function goContact() {
		goto('/contact');
	}

	function closeMenu() {
		isMobileMenuOpen = false;
		console.log('Mobile menu closed');
	}

	function openMenu() {
		isMobileMenuOpen = true;
	}
</script>

<header class=" w-full border-b border-secondary lg:border-none">
	<nav
		class="mx-auto flex max-w-[1600px] items-center justify-between
				px-6 py-4
              	md:px-10 md:py-6
				xl:px-10 xl:py-8"
		aria-label="Main navigation"
	>
		<a
			class="text-3xl font-black text-primary italic
					md:text-4xl
					xl:text-5xl"
			href="./"
			aria-label="Logo">LYN</a
		>
		<!-- Desktop menu -->
		<div class="hidden items-center justify-between gap-4 lg:flex">
			<ul class="m-0 flex list-none gap-6 p-0">
				<li><NavItem label="Home" href="./" /></li>
				<li><NavItem label="About" href="/about" /></li>
				<li><NavItem label="Projects" href="/projects" /></li>
			</ul>
			<div class="m-0 flex list-none gap-2 p-0">
				<IconButton icon="ic:baseline-contrast"></IconButton>
				<IconButton icon="ic:outline-palette"></IconButton>
				<IconButton icon="circle-flags:lang-vi"></IconButton>
			</div>
			<Button onClick={goContact} label="Get in Touch"></Button>
		</div>

		<!-- Mobile menu -->
		<div class="lg:hidden">
			<IconButton class="text-3xl" icon="mingcute:menu-line" onClick={openMenu}></IconButton>
		</div>
		<!-- Mobile menu overlay -->
		{#if isMobileMenuOpen}
			<div
				class="animate-fadeIn fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-background/95 text-lg font-semibold text-primary backdrop-blur-sm"
			>
				<div class="absolute top-6 right-6">
					<IconButton icon="mingcute:close-line" class="text-4xl" onClick={closeMenu}></IconButton>
				</div>
				<NavItem onClick={closeMenu} label="Home" href="./" />
				<NavItem onClick={closeMenu} label="About" href="/about" />
				<NavItem onClick={closeMenu} label="Projects" href="/projects" />

				<IconButton icon="mingcute:sun-line" class="text-2xl"></IconButton>
				<IconButton icon="mingcute:palette-line" class="text-2xl"></IconButton>
				<IconButton icon="circle-flags:lang-vi" class="text-2xl"></IconButton>

				<Button
					class="mt-6"
					onClick={() => {
						goContact();
						closeMenu();
					}}
					label="Get in Touch"
				></Button>
			</div>
		{/if}
	</nav>
</header>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fadeIn {
		animation: fadeIn 0.3s ease-in-out;
	}
</style>
