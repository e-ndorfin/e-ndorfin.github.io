/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'theme-bg': '#F6EBDD',
				'theme-text': '#432818',
				'theme-accent': '#6F1D1B',
				'theme-gold': '#BB9457',
				'theme-brown': '#99582A',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
