/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			arial: ['Arial', 'sans-serif'],
			motiva: ['Motiva Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				steam: {
					dark: '#171a21',
					light: '#c7d5e0',
					lightBlue: '#66c0f4',
					darkBlue: '#1b2838',
					medBlue: '#2a475e',
					grey:'#212429',
				},
			},
		},
	},
	plugins: [],
};
