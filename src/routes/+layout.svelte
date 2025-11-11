<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/layout/Header.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid grid-rows-[86px_1fr_auto] min-h-screen bg-background  ">
    <Header></Header>
	<slot></slot>
</div>

