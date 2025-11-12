<script lang="ts">
	import InfoItem from '../components/ui/InfoItem.svelte';
	import Heading from '../components/ui/Heading.svelte';
	import Link from '../components/ui/Link.svelte';
</script>

<div>
	<div>
		<p
			class=" text-5xl
					font-bold
					text-primary
					md:text-6xl
					lg:text-7xl
					xl:text-8xl
					2xl:text-9xl"
		>
			Hi,
		</p>
		<Heading
			text="I'm Linh Yen Nguyen."
			class="mt-12 text-4xl
					md:mt-12 md:text-6xl
					lg:mt-8 lg:text-7xl 
					xl:mt-10 xl:text-8xl 
					2xl:mt-15 2xl:text-9xl"
		></Heading>
		<p
			class="mt-12 text-3xl font-bold text-primary
					md:mt-12 md:ml-0.5 md:text-5xl
					lg:mt-8 lg:ml-1 lg:text-5xl
					xl:mt-10 xl:ml-1 xl:text-6xl
					2xl:mt-15 2xl:ml-1 2xl:text-7xl"
		>
			I'm front-end developer.
		</p>
	</div>

	<div
		class="mt-12 flex flex-col gap-20
				md:mt-12 md:ml-0.5
				lg:mt-8 lg:ml-1 lg:flex-row
				xl:mt-10 xl:ml-1
				2xl:mt-15 2xl:ml-1.5"
	>
		<InfoItem title="2" content="Real-world Projects"></InfoItem>
		<InfoItem title="1+" content="Years of Experience"></InfoItem>
		<InfoItem title="100%" content="Coding, Growing, Evolving"></InfoItem>
	</div>

	<hr
		class="mt-8 w-3/4 rounded-xs border-t-4 border-primary md:mt-12
				md:ml-1 md:border-t-6 lg:mt-6
				lg:ml-1 lg:w-1/2
				xl:mt-8 xl:ml-1
				2xl:mt-10 2xl:ml-1.5"
	/>

	<div
		class="mt-8
				md:mt-12 md:ml-1
				lg:mt-6 lg:ml-1
				xl:mt-8 xl:ml-1
				2xl:mt-10 2xl:ml-1.5"
	>
		<span
			class="text-xl font-medium text-secondary
					md:text-2xl
					lg:text-xl
					xl:text-xl
					2xl:text-xl">Want to see my journey and skills?</span
		>
		<Link
			class="mt-8 text-xl 
					md:text-2xl
					lg:inline lg:text-xl
					xl:ml-2
					xl:text-xl
					2xl:text-xl"
			text="Get to know me!"
			actionContent="Go to About"
		></Link>
	</div>
</div>
