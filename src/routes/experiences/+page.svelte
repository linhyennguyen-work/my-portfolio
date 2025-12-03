<script lang="ts">
	import SkillsItems from '../../components/layout/SkillsItems.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import ProjectCard from '../../components/ui/ProjectCard.svelte';
	import SpecialButton from '../../components/ui/SpecialButton.svelte';
	const timeline = [
		{
			company: 'Netpower Vietnam',
			role: 'Front-end Developer',
			time: '12/2022 – 04/2024',
			responsibilities: [
				'Developed web and mobile application interfaces using Svelte and Flutter.',
				'Optimized UI/UX and rendering performance, ensuring consistent and responsive interfaces.',
				'Collaborated closely with the backend team to integrate APIs and handle data flows.'
			]
		},
		{
			company: 'Netpower Vietnam',
			role: 'Intern',
			time: '09/2022 – 12/2022',
			responsibilities: [
				'Studied and practiced ReactJS, NextJS, VueJS, and NestJS through internal tasks.'
			]
		},
		{
			company: 'Ton Duc Thang	 University ',
			role: 'Bachelor of Information Technology',
			time: '09/2017 – 04/2022',
			responsibilities: ['Major: Software Engineering.', ' GPA: 7.3/10']
		}
	];
	const projects = [
		{
			name: 'Dokall',
			description:
				'A communication and collaboration platform for businesses with workspace functionality, real-time messaging, voice/video calling, notes management, and task management.',
			link: 'Internal Product',
			tech: 'Svelte, Tailwind, Nest.Js, PostgreSQL',
			time: '01/2023- 05/2024',
			company: 'Netpower Vietnam',
			role: 'Front-end Developer',
			responsibilities: [
				'Built core interfaces including Landing Page, Main Page and Admin Dashboard.',
				'Developed a multi-color theme system supporting both Light Mode and Dark Mode.',
				'Implemented Boards (task management) and Notes (content & note management) features.',
				'Built the Admin Dashboard UI for user and system management.',
				'Integrated the Draft Message feature for temporary text storage.',
				'Ensured cross-browser and cross-device compatibility using responsive design techniques.',
				'Tested UI, identified issues, fixed bugs, and optimized user experience.'
			]
		},
		{
			name: 'Scan Art',
			description:
				'A mobile application that allows users to scan artworks to retrieve information and enables buying/selling artworks through an integrated marketplace.',
			link: 'https://www.scanart.app/',
			tech: 'Flutter, Svelte, Tailwind, Nest.Js, PostgreSQL,',
			time: '09/2023- 05/2024',
			company: 'Netpower Vietnam',
			role: 'Front-end Developer',
			responsibilities: [
				'Developed UI for both mobile application (Flutter) and web-based Admin Dashboard.',
				'Implemented mobile screens from design files, integrated APIs and processed artwork/user/transaction data.',
				'Built and enhanced the Admin Dashboard for managing artworks, users and marketplace operations.',
				'Updated and refined UI based on client requirements to meet product goals and user expectations.',
				'Conducted UI testing on both mobile and web; detected issues, reported and fixed bugs before release'
			]
		},
		{
			name: 'Storii',
			description:
				'A personal web for a singer, featuring music playback, concert information, album showcase, and interview articles',
			link: 'https://linhyennguyen-work.github.io/storii/',
			tech: 'HTML, CSS, Javascript, Jquery',
			time: ' 12/2020- 01/2021',
			company: 'Personal Project',
			role: 'Front-end Intern',
			responsibilities: ['Designed and developed the user interface.']
		}
	];
	const skills = {
		backend: ['NodeJS', 'NestJS', 'PostgreSQL', 'MySQL'],
		frontend: ['Svelte', 'React', 'Flutter', 'HTML', 'CSS', 'TailwindCSS'],
		versionSourceControl: ['Git', 'GitHub', 'Bitbucket'],
		tools: ['Figma', 'Sketch', 'Jira'],
		programmingLanguages: ['JavaScript', 'TypeScript', 'Dart'],
		soft: ['Teamwork', 'Adaptability', 'Problem-solving', 'Creativity'],
		languages: ['Vietnamese', 'English - TOEIC']
	};
</script>

<Heading text="Experiences"></Heading>
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
	<h3 class="mb-5 flex text-4xl font-bold text-primary lg:mb-10 2xl:text-5xl">[ Skills ]</h3>
	<SkillsItems {skills} />
</div>
<div class="mt-10 lg:mx-5 lg:mt-10 xl:mt-15 2xl:mt-20">
	<h3 class="mb-5 flex text-4xl font-bold text-primary lg:mb-10 2xl:text-5xl">[ Projects ]</h3>
	{#each projects as item}
		<ProjectCard {item}></ProjectCard>
	{/each}
	<SpecialButton></SpecialButton>
</div>
