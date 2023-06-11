/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'!./src/pages/new-product-landing.astro',
		'!./src/layouts/Landing.astro',
		'!./src/components/landing/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
};
