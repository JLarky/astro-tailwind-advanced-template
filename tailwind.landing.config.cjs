/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/new-product-landing.astro',
		'./src/layouts/Landing.astro',
		'./src/components/landing/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			fontFamily: {
				heading: ['"Comic Sans MS"', 'sans-serif'],
			},
			colors: {
				best: '#ff0000',
			},
		},
	},
};
