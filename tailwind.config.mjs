/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'theme-bg': '#111111',
				'theme-text': '#ededed',
				'theme-accent': '#22c55e',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
