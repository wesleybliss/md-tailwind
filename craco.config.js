// const ModuleScopePlugin = require
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack: {
        plugins: {
            remove: [
                'ModuleScopePlugin',
            ],
        },
        configure: (config, { env, paths }) => {
            config.resolve.plugins = config.resolve.plugins
                //.filter(plugin => !(plugin instanceof ModuleScopePlugin))
                .filter(plugin => plugin.constructor.name !== 'ModuleScopePlugin')
            
            return config
        }
    },
}
