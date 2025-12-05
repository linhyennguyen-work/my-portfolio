<script lang="ts">
	import { t } from 'svelte-i18n';
	import Heading from '../components/ui/Heading.svelte';
	import InfoItem from '../components/ui/InfoItem.svelte';
	import Link from '../components/ui/Link.svelte';
</script>

<Heading text={$t('about.greeting')}></Heading>
<div class="mt-8 lg:mx-2 lg:mt-10 xl:mx-3 xl:mt-12 2xl:mx-2 2xl:mt-20">
	<p
		class="
					text-3xl font-bold text-primary
					 md:text-5xl
					 lg:text-6xl
					 xl:text-7xl
					 2xl:text-8xl"
	>
		{$t('about.name')}
	</p>
	<p
		class="xl mt-5 text-2xl font-bold
					text-primary md:mt-10
					md:text-3xl lg:mx-0.5
					lg:mt-5 lg:text-4xl xl:mx-0.5 xl:mt-8 xl:text-5xl
					2xl:mx-1 2xl:mt-15 2xl:text-6xl"
	>
		{$t('about.role')}
	</p>
	<div
		class="items mt-4 flex flex-col gap-6 md:mt-10 md:gap-8 lg:mx-0.5 lg:mt-4 lg:flex-row lg:gap-20 xl:mx-0.5 xl:mt-6 2xl:mx-1 2xl:mt-15"
	>
		<InfoItem title="2" content={$t('about.skill_prj')}></InfoItem>
		<InfoItem title="1+" content={$t('about.skill_exp')}></InfoItem>
		<InfoItem title="100%" content={$t('about.skill_code')}></InfoItem>
	</div>

	<hr
		class="my-6 w-3/4 rounded-xs border-t-4 border-primary md:my-10 md:border-t-6 lg:mx-0.5 lg:my-4 lg:w-1/2 xl:mx-0.5 xl:my-4 2xl:mx-1 2xl:my-8"
	/>

	<Link
		class="text-lg text-secondary md:text-2xl lg:mx-0.5 lg:inline  lg:text-lg xl:mx-0.5 xl:text-lg 2xl:mx-1 2xl:text-xl "
		text={$t('about.invite')}
		actionContent={$t('about.go_exp')}
		href="/experiences"
	></Link>
</div>
