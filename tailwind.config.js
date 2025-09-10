/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            width: {
                300: '75rem', // 1200px
                230: '57.5rem', // 920px
                172: '43rem', // 688px (md)
                140: '35rem', // 560px (sm)
                96: '24rem', // 384px
            },
            height: {
                200: '50rem', //800px
            },
        },
    },
};
