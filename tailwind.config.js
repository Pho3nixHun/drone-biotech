const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                '.custom-input': {
                    display: 'block',
                    paddingTop: '1rem', // py-4
                    paddingBottom: '1rem', // py-4
                    paddingLeft: '1.25rem', // px-5
                    paddingRight: '1.25rem', // px-5
                    marginBottom: '1.25rem', // mb-5
                    width: '100%', // w-full
                    borderWidth: '2px', // border-2
                    borderColor: '#000', // border-black
                },
            });
        }),
    ],
};
