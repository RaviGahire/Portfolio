/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'selector' in v4
    theme: {
        extend: {},
        screens: {
            '2xl': '1540px',
            '3xl': '1900px',
        }
    },
    plugins: [],
}