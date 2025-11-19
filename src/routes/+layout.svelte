<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/layout/Header.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid min-h-screen grid-rows-[min-content_auto] bg-background">
	<Header></Header>
	<main
		class="mx-auto w-full max-w-[1600px]
				px-5 pt-10 pb-5
				md:px-20 md:pt-10 md:pb-5
				lg:px-20 lg:pt-0 lg:pb-5
				xl:px-20 xl:pt-0 xl:pb-5
			   	2xl:px-20 2xl:pt-10 2xl:pb-10"
	>
		<slot></slot>
	</main>
</div>
