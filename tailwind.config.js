const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            width: {
                "500": '500px',
                "1200": '1200px'
            },
        },
    },
    plugins: [
        require('flyonui'),
        require('@tailwindcss/container-queries'),
        plugin(function ({ addComponents }) {
            const header = {
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
            const ordersPage = {
                '.form-label': {
                    'display': 'block',
                    'font-weight': 600,
                    'color': '#374151'
                },
                '.form-input': {
                    'width': '100%',
                    'padding': '0.75rem',
                    'border': '1px solid #d1d5db',
                    'border-radius': '0.5rem',
                    'outline': 'none',
                    '&:focus': {
                        'box-shadow': '0 0 0 3px #93c5fd',
                    },
                },
                '.table-padding th, td': {
                    'padding-left': '1rem' /* 16px */,
                    'padding-right': '1rem' /* 16px */,
                    'padding-bottom': '0.5rem' /* 8px */,
                    'padding-top': '0.5rem' /* 8px */,
                }
            }
            addComponents([header, ordersPage]);
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
