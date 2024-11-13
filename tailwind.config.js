const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('flyonui'),
        plugin(function ({ addComponents }) {
            const components = {
                '.nav-item': {
                    cursor: 'pointer',
                    'transition-duration': '150ms',
                    '@screen sm': {
                        '&:hover': {
                            color: '#9ca3af', 
                        },
                    },
                },
            };
            addComponents(components);
        }),
    ],
    flyonui: {
        themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "soft"]
        darkTheme: 'corporate', // name of one of the included themes for dark mode
        base: false, // applies background color and foreground color for root element by default
        styled: true, // include FlyonUI colors and design decisions for all components
        utils: false, // adds responsive and modifier utility classes
        vendors: false, // default is false when true add customize css for apexChart, editor.js, flatpickr, fullcalendar, notyf, raty-js
        logs: false, // Shows info about FlyonUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
};
