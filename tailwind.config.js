/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	theme: {
		extend: {
			minHeight: {
				16: '4rem',
			},
		},
	},
	plugins: [],
}
