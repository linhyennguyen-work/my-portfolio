<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/layout/Header.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid min-h-screen grid-rows-[86px_1fr_auto]">
	<Header></Header>
	<main class="mx-auto w-full max-w-[1440px] px-20 pt-15 pb-10">
		<slot></slot>
	</main>
</div>
