<script lang="ts">
	import Icon from '@iconify/svelte';
	import DetailItem from './DetailItem.svelte';
	import { slide } from 'svelte/transition';
	import { t } from 'svelte-i18n';

	export let item: {
		name: any;
		description: string;
		tech: string;
		time: string;
		link: string;
		company: string;
		role: string;
		responsibilities: string[];
	};

	let isShowDetails: boolean = false;

	function toggleDetails() {
		isShowDetails = !isShowDetails;
	}

	$: translateDescription = (name: string): string => {
		return $t('exp.' + name.toLowerCase().replace(/\s+/g, '') + '.description');
	};

	$: translateKey = (key: string): string => {
		return $t('exp.prj_title.' + key);
	};
</script>

<div
	class="mx-auto mt-6 max-w-[1440px] rounded-3xl bg-surface p-5 shadow-md md:rounded-4xl md:p-6 xl:p-10 2xl:p-12"
>
	<div class=" flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
		<div class="mt-3 w-full text-primary lg:mt-0 lg:w-3/6 xl:w-3/5 2xl:w-3/5 2xl:text-xl">
			{translateDescription(item.name)}
		</div>
		<div class="text-3xl font-bold text-primary md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
			{item.name}
		</div>
	</div>
	{#if isShowDetails}
		<div class="mb-4 xl:mb-6 2xl:mb-8" transition:slide={{ duration: 700 }}>
			{#each Object.entries(item).filter(([key]) => key !== 'name' && key !== 'description') as [key, value]}
				<DetailItem title={translateKey(key)} content={value} />
			{/each}
		</div>
	{/if}

	<button
		onclick={toggleDetails}
		class="mt-2 flex cursor-pointer items-center gap-1 text-sm text-secondary italic 2xl:mt-1 2xl:text-lg"
	>
		<span>{isShowDetails ? $t('button.less') : $t('button.more')} </span>
		<Icon
			icon={isShowDetails
				? 'ic:baseline-keyboard-double-arrow-up'
				: 'ic:baseline-keyboard-double-arrow-down'}
			class=""
		></Icon>
	</button>
</div>
