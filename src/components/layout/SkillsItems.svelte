<script lang="ts">
	export let skills: {
		backend: string[];
		frontend: string[];
		versionSourceControl: string[];
		tools: string[];
		programmingLanguages: string[];
		soft: string[];
		languages: string[];
	};

	const skillKeys = Object.keys(skills) as (keyof typeof skills)[];

	const sizes = [
		'xl:col-span-1 xl:row-span-1 lg:col-span-1 lg:row-span-1',
		'xl:col-span-1 xl:row-span-2 lg:col-span-1 lg:row-span-1',
		'xl:col-span-1 xl:row-span-1 lg:col-span-1 lg:row-span-1',
		'xl:col-span-1 xl:row-span-1 lg:col-span-1 lg:row-span-1',
		'xl:col-span-1 xl:row-span-1 lg:col-span-1 lg:row-span-1',
		'xl:col-span-1 xl:row-span-1 lg:col-span-1 lg:row-span-1',
		'xl:col-span-1 xl:row-span-1 lg:col-span-1 lg:row-span-1'
	];

	const formatTitle = (str: string) =>
		str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (c) => c.toUpperCase())
			.trim();
</script>

<div
	class="grid grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4"
>
	{#each skillKeys as key, i}
		<div
			class={`flex flex-col gap-2 overflow-auto rounded-3xl bg-surface p-5 shadow-lg md:rounded-4xl md:p-6 xl:p-10 2xl:p-12 ${sizes[i]}`}
		>
			<div class=" font-semibold text-primary lg:text-lg 2xl:text-xl">{formatTitle(key)}</div>
			<div class="flex flex-wrap gap-4 py-2">
				{#each skills[key] as skill}
					<span
						class="hover-bounce cursor-default rounded-full border border-secondary px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 ease-in-out hover:border-primary hover:text-primary md:text-base 2xl:text-lg"
					>
						{skill}
					</span>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	@keyframes bounce-small {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.hover-bounce:hover {
		animation: bounce-small 0.4s ease forwards;
	}
</style>
