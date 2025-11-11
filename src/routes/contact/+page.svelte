<script lang="ts">
	import Link from '../../components/ui/Link.svelte';

	import Icon from '@iconify/svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import InfoItem from '../../components/ui/InfoItem.svelte';
</script>

<div class=" ">
	<Heading class="text-[240px]" text="Contact"></Heading>
	<div class="mt-20 flex justify-between">
		<div>
			<p class="text-4xl font-medium text-secondary">Got an idea, a goal, or a challenge?</p>
			<Link text="Let's connect!" actionContent="Get my resume"></Link>
		</div>
		<div class="mt-2 flex flex-col gap-10">
			<div class="flex gap-20">
				<InfoItem title="Phone / Zalo" content="0903750719" isReverse={true}></InfoItem>
				<InfoItem title="Location" content="Ho Chi Minh City" isReverse={true}></InfoItem>
			</div>
			<InfoItem title="Github" content="github.com/linhyennguyen-work" isReverse={true}></InfoItem>
			<InfoItem title="Email" content="linhyennguyen.work@gmail.com" isReverse={true}></InfoItem>
		</div>
	</div>
</div>
