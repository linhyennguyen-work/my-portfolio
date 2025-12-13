import { browser } from '$app/environment';
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

let initialized = false;

export async function setupI18n() {
	if (initialized) return;
	initialized = true;

	register('en', () => import('../locales/en.json'));
	register('vi', () => import('../locales/vi.json'));

	let initialLocale = 'en';

	if (browser) {
		initialLocale = localStorage.getItem('lang') ?? getLocaleFromNavigator() ?? 'en';

		locale.subscribe((value) => {
			if (value) localStorage.setItem('lang', value);
		});
	}

	await init({
		fallbackLocale: 'en',
		initialLocale
	});
}
