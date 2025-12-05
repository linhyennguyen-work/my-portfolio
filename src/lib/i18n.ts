// src/lib/i18n.ts
import { browser } from '$app/environment';
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

// 1. Đăng ký ngôn ngữ (giữ nguyên, nhưng nên dùng alias $lib nếu file locales nằm trong lib)
// Giả sử file locales nằm trong thư mục 'locales' cùng cấp với 'i18n.ts'
register('en', () => import('../locales/en.json'));
register('vi', () => import('../locales/vi.json'));

// 2. Định nghĩa hàm Setup và EXPORT hàm này
export async function setupI18n() {
	let initialLocale: string | undefined;

	if (browser) {
		// Lấy ngôn ngữ từ localStorage nếu có, nếu không lấy từ navigator
		initialLocale = localStorage.getItem('lang') ?? getLocaleFromNavigator() ?? 'en';

		// Lưu ngôn ngữ vào localStorage khi thay đổi
		// Lệnh subscribe này chỉ cần chạy MỘT LẦN
		locale.subscribe((value) => {
			if (value) localStorage.setItem('lang', value);
		});
	}

	// Chạy init (await là cần thiết để chờ tải file JSON)
	await init({
		fallbackLocale: 'en',
		// Thiết lập ngôn ngữ ban đầu dựa trên logic ở trên (nếu có)
		initialLocale: initialLocale
	});
}
