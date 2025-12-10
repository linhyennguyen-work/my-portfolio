<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/layout/Header.svelte';
	import '$lib/i18n';
	import { setupI18n } from '$lib/i18n';
	import VantaBackground from '../components/layout/VantaBackground.svelte';
	let i18nReady = setupI18n();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#await i18nReady}
	<p class=" z-10 p-10 text-white">Đang tải ngôn ngữ...</p>
{:then}
	<div class="relative min-h-screen">
		<VantaBackground></VantaBackground>
		<div class="relative z-10">
			<Header></Header>
			<main
				class="z-10 mx-auto w-full max-w-[1600px]
                       px-5 pt-2 pb-6 md:px-10 md:pt-5 md:pb-8 lg:px-20 lg:pt-0 lg:pb-8
                       xl:px-20 xl:pt-0 xl:pb-12 2xl:px-20 2xl:pt-0 2xl:pb-15"
			>
				<slot></slot>
			</main>
		</div>
	</div>
{/await}
