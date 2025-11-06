/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'selector' in v4
    theme: {
        extend: {
            backgroundImage: {
                // custom gradient variable
                'dark-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000',
            }
        },
        screens: {}
    },
    plugins: [],
}