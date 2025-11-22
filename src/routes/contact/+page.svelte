<script lang="ts">
	import Link from '../../components/ui/Link.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import InfoItem from '../../components/ui/InfoItem.svelte';
</script>

<Heading text="Contact"></Heading>
<div
	class="mt-5 ml-5 flex flex-col-reverse justify-between gap-10
		lg:mt-10
		lg:flex-row lg:gap-0 xl:mt-15 2xl:mt-20"
>
	<div>
		<p
			class="text-lg font-medium text-secondary
						lg:text-2xl xl:text-3xl 2xl:text-4xl"
		>
			Got an idea, a goal, or a challenge?
		</p>
		<Link
			class="text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl"
			text="Let's connect!"
			actionContent="Get my resume"
		></Link>
	</div>
	<div class="mt-2 flex flex-col gap-2 lg:gap-8 xl:gap-10">
		<div class="flex flex-col gap-2 lg:flex-row lg:gap-20">
			<InfoItem title="Phone / Zalo" content="0903 750 719" isReverse={true}></InfoItem>
			<InfoItem title="Location" content="Ho Chi Minh City" isReverse={true}></InfoItem>
		</div>
		<InfoItem title="Github" content="github.com/linhyennguyen-work" isReverse={true}></InfoItem>
		<InfoItem title="Email" content="linhyennguyen.work@gmail.com" isReverse={true}></InfoItem>
	</div>
</div>
