/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--color-bg)',
                'bg-secondary': 'var(--color-bg-secondary)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
            },
            fontFamily: {
                sans: ['var(--font-main)'],
                display: ['var(--font-display)'],
            }
        },
    },
    plugins: [],
}
