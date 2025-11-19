<script lang="ts">
	import Heading from '../../components/ui/Heading.svelte';
	import ProjectCard from '../../components/ui/ProjectCard.svelte';
	import SpecialButton from '../../components/ui/SpecialButton.svelte';
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
			link: 'https://linhyennguyen1802.github.io/storii/',
			tech: 'HTML, CSS, Javascript, Jquery',
			time: ' 12/2020- 01/2021',
			company: 'Personal Project',
			role: 'Front-end Intern',
			responsibilities: ['Designed and developed the user interface.']
		}
	];
</script>

<div>
	<Heading text="Projects"></Heading>
	<div class="mt-12 ml-5 lg:mt-18 xl:mt-30">
		{#each projects as item}
			<ProjectCard {item}></ProjectCard>
		{/each}
	</div>
	<SpecialButton></SpecialButton>
</div>
