
const config = {
    plugins: {
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    }
}

if (process.env.NODE_ENV !== 'production') {
    config.plugins.tailwindcss = {}
    config.plugins.autoprefixer = {}
}

module.exports = config
