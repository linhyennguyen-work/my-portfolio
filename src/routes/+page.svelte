<script lang="ts">
	import Heading from '../components/ui/Heading.svelte';
	import InfoItem from '../components/ui/InfoItem.svelte';
	import Link from '../components/ui/Link.svelte';
</script>

<Heading text="Hi,"></Heading>
<div class="mt-12 lg:mx-2 lg:mt-15 xl:mt-15 2xl:mt-20">
	<p
		class="
					text-3xl font-bold text-primary
					 md:text-5xl
					 lg:text-6xl
					 xl:text-7xl
					 2xl:text-8xl"
	>
		I'm Linh Yen Nguyen.
	</p>
	<p
		class="mt-5 text-2xl font-bold text-primary
					md:mt-12 md:ml-0.5 md:text-3xl
					lg:mt-8 lg:ml-1 lg:text-4xl
					xl:mt-10 xl:ml-1 xl:text-5xl
					2xl:mt-15 2xl:ml-1 2xl:text-6xl"
	>
		I'm front-end developer.
	</p>
	<div
		class="mx-2 mt-8 flex flex-col gap-10 md:mt-12 md:gap-20 lg:mt-8 lg:flex-row xl:mt-10 2xl:mt-15"
	>
		<InfoItem title="2" content="Real-world Projects"></InfoItem>
		<InfoItem title="1+" content="Years of Experience"></InfoItem>
		<InfoItem title="100%" content="Coding, Growing, Evolving"></InfoItem>
	</div>

	<hr
		class="mx-2 my-6 w-3/4 rounded-xs border-t-4 border-primary md:my-12 md:border-t-6 lg:my-6 lg:w-1/2 xl:my-8 2xl:my-8"
	/>

	<Link
		class=" mx-2 text-lg  text-secondary md:text-2xl lg:inline lg:text-xl xl:text-xl 2xl:text-xl "
		text="Want to see my journey and skills?"
		actionContent="Go to Experiences"
		href="/experiences"
	></Link>
</div>
