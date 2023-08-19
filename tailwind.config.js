/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/tailwind.colors');
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
    content: [
        './index.html', // <= add this
        './src/**/*.{js,ts,jsx,tsx}', // <= no spaces
    ],
    theme: {
        colors: {
            ...colors,
        },
        extend: {
            colors: {
                ...colors,

                // Adicione suas cores personalizadas aqui
            },
        },
    },
    plugins: [],
});
