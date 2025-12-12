<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import VantaFogEffect from 'vanta/dist/vanta.fog.min';

	let vantaEffect: any;
	let themeName: string;
	let observer: MutationObserver;

	const themeColors: {
		[key: string]: { highlight: number; midtone: number; lowlight: number; base: number };
	} = {
		'dark-black': {
			highlight: 0xd4d8de,
			midtone: 0x9b9fa5,
			lowlight: 0x181b1f,
			base: 0x0f1216
		},
		'light-black': {
			highlight: 0xe1e1e1,
			midtone: 0xeaeaea,
			lowlight: 0xf4f4f4,
			base: 0xfefefe
		},
		'dark-blue': {
			highlight: 0x768efb,
			midtone: 0x647cc5,
			lowlight: 0x182135,
			base: 0x0b111f
		},
		'light-blue': {
			highlight: 0xbde3ff,
			midtone: 0xd1ebff,
			lowlight: 0xe4f4ff,
			base: 0xf8fcff
		},
		'dark-rose': {
			highlight: 0xd4b8bc,
			midtone: 0xa38c91,
			lowlight: 0x332629,
			base: 0x120c0d
		},
		'light-rose': {
			highlight: 0xffe4e9,
			midtone: 0xeab8c1,
			lowlight: 0xffe1e7,
			base: 0xfff5f7
		}
	};

	function initVanta(theme: string) {
		if (vantaEffect) {
			vantaEffect.destroy();
		}

		const colors = themeColors[theme] || themeColors['dark-blue'];

		const el = document.getElementById('vanta-background');
		if (el) {
			vantaEffect = VantaFogEffect({
				el: el,
				THREE: THREE,

				highlightColor: colors.highlight,
				midtoneColor: colors.midtone,
				lowlightColor: colors.lowlight,
				baseColor: colors.base,
				mouseControls: true,
				touchControls: true,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				blurFactor: 0.9,
				speed: 1.5
			});
		}
	}

	$: if (themeName) {
		initVanta(themeName);
	}

	onMount(() => {
		themeName = document.documentElement.dataset.theme || 'dark-blue';

		observer = new MutationObserver((mutationsList) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
					const newTheme = document.documentElement.dataset.theme || 'dark-blue';
					if (newTheme !== themeName) {
						themeName = newTheme; //
					}
				}
			}
		});

		observer.observe(document.documentElement, { attributes: true });
	});

	onDestroy(() => {
		if (vantaEffect) {
			vantaEffect.destroy();
		}
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<div id="vanta-background" class="fixed inset-0 z-0"></div>
