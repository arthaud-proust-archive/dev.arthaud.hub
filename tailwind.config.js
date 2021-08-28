module.exports = {
    // mode: 'jit',
    // purge: [
    //     './public/**/*.html',
    //     './src/**/*.{js,jsx,ts,tsx,vue}',
    // ],
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                '2xs': '.65rem'
            },
            fontFamily: {
                'hand': 'Allison, cursive'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
