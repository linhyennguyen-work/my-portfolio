<script lang="ts">
	import { t } from 'svelte-i18n';
	import SkillsItems from '../../components/layout/SkillsItems.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import ProjectCard from '../../components/ui/ProjectCard.svelte';
	import SpecialButton from '../../components/ui/SpecialButton.svelte';
	$: timeline = [
		{
			company: $t('exp.company'),
			role: $t('exp.role_dev'),
			time: '12/2022 – 04/2024',
			responsibilities: [
				$t('exp.res_np.res_001'),
				$t('exp.res_np.res_002'),
				$t('exp.res_np.res_003')
			]
		},
		{
			company: $t('exp.company'),
			role: $t('exp.role_intern'),
			time: '09/2022 – 12/2022',
			responsibilities: [$t('exp.res_np_intern')]
		},
		{
			company: $t('exp.university'),
			role: $t('exp.role_tdt'),
			time: '09/2017 – 04/2022',
			responsibilities: [$t('exp.res_tdt.res_001'), $t('exp.res_tdt.res_002')]
		}
	];

	$: projects = [
		{
			name: 'Dokall',
			description: $t('exp.dokall.description'),
			link: $t('exp.product'),
			tech: 'Svelte, Tailwind, NestJS, PostgreSQL',
			time: '01/2023- 05/2024',
			company: $t('exp.company'),
			role: $t('exp.role_dev'),
			responsibilities: [
				$t('exp.dokall.res.res_001'),
				$t('exp.dokall.res.res_002'),
				$t('exp.dokall.res.res_003'),
				$t('exp.dokall.res.res_004'),
				$t('exp.dokall.res.res_005'),
				$t('exp.dokall.res.res_006'),
				$t('exp.dokall.res.res_007')
			]
		},
		{
			name: 'Scan Art',
			description: $t('exp.scanart.description'),
			link: 'https://www.scanart.app/',
			tech: 'Flutter, Svelte, Tailwind, NestJS, PostgreSQL,',
			time: '09/2023- 05/2024',
			company: $t('exp.company'),
			role: $t('exp.role_dev'),
			responsibilities: [
				$t('exp.scanart.res.res_001'),
				$t('exp.scanart.res.res_002'),
				$t('exp.scanart.res.res_003'),
				$t('exp.scanart.res.res_004'),
				$t('exp.scanart.res.res_005')
			]
		},
		{
			name: 'Storii',
			description: $t('exp.storii.description'),
			link: 'https://linhyennguyen-work.github.io/storii/',
			tech: 'HTML, CSS, Javascript, Jquery',
			time: ' 12/2020- 01/2021',
			company: $t('exp.prj'),
			role: $t('exp.role_intern'),
			responsibilities: [$t('exp.storii.res.res_001')]
		}
	];

	$: skills = {
		backend: ['NodeJS', 'NestJS', 'PostgreSQL', 'MySQL', 'RESTful API'],
		frontend: ['Svelte', 'Flutter', 'ReactJS', 'VueJS', 'Tailwind', 'Sass', 'Responsive', 'SEO'],
		versionSourceControl: ['Git', 'GitHub', 'Bitbucket', 'Jira'],
		tools: ['Figma', 'Sketch'],
		programmingLanguages: ['JavaScript', 'TypeScript', 'Dart'],
		soft: [
			$t('soft_skills.communication'),
			$t('soft_skills.teamwwork'),
			$t('soft_skills.agile'),
			$t('soft_skills.research')
		]
	};
</script>

<Heading text={$t('exp.heading')}></Heading>
<div class="mt-8 lg:mx-5 lg:mt-15 xl:mt-20 2xl:mt-25">
	{#each timeline as item, i}
		<div class={i > 0 ? 'mt-6 xl:mt-8 2xl:mt-10 ' : ''}>
			<p class="text-lg font-medium text-primary lg:text-xl xl:text-2xl 2xl:text-3xl">
				{item.company} — {item.role}
			</p>
			<p class="mt-1 font-medium text-secondary italic md:mt-3 2xl:text-xl">{item.time}</p>
			<ul class="list-disc pl-10 text-primary md:mt-3 2xl:text-xl">
				{#each item.responsibilities as task}
					<li class="mt-2">{task}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
<div class="mt-10 lg:mx-5 lg:mt-10 xl:mt-15 2xl:mt-20">
	<h3 class="mb-5 flex text-4xl font-bold text-primary lg:mb-10 2xl:text-5xl">
		[ {$t('exp.title_skills')} ]
	</h3>
	<SkillsItems {skills} />
</div>
<div class="mt-10 lg:mx-5 lg:mt-10 xl:mt-15 2xl:mt-20">
	<h3 class="mb-5 flex text-4xl font-bold text-primary lg:mb-10 2xl:text-5xl">
		[ {$t('exp.title_prj')} ]
	</h3>
	{#each projects as item}
		<ProjectCard {item}></ProjectCard>
	{/each}
	<SpecialButton></SpecialButton>
</div>
