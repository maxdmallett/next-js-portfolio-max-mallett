/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary': {
                    '50': '#f2f7fb',
                    '100': '#e7f0f8',
                    '200': '#d3e2f2',
                    '300': '#b9cfe8',
                    '400': '#9cb6dd',
                    '500': '#839dd1',
                    '600': '#6a7fc1',
                    '700': '#6374ae',
                    '800': '#4a5989',
                    '900': '#414e6e',
                    '950': '#262c40',
                },
            }
        },
    },
    plugins: [],
}
