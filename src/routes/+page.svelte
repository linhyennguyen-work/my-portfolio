<script lang="ts">
	import InfoItem from '../components/ui/InfoItem.svelte';

	import Heading from '../components/ui/Heading.svelte';
	import Link from '../components/ui/Link.svelte';
</script>

<div>
	<div>
		<p class="text-9xl font-bold text-primary">Hi,</p>
		<Heading text="I'm Linh Yen Nguyen." class="mt-15 text-9xl"></Heading>
		<p class="mt-15 text-7xl font-bold text-primary">I'm front-end developer.</p>
	</div>

	<div class="mt-15 flex gap-20">
		<InfoItem title="2" content="Real-world Projects"></InfoItem>
		<InfoItem title="1+" content="Years of Experience"></InfoItem>
		<InfoItem title="100%" content="Coding, Growing, Evolving"></InfoItem>
	</div>

	<hr class="mt-10 w-1/2 rounded-xs border-t-6 border-primary" />

	<div class=" mt-10">
		<span class="text-xl font-medium text-secondary">Want to see my journey and skills?</span>
		<Link class="ml-2 inline text-xl" text="Get to know me!" actionContent="Go to About"></Link>
	</div>
</div>
