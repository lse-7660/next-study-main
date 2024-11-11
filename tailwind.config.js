/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'red',
                secondary: '#0050FF',
                gray: {
                    DEFAULT: '#666',
                },

                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontSize: {},
            fontFamily: {},
            // 변수는 이렇게 만들어서 쓰면 됨!!!
        },
    },
    plugins: [],
};
