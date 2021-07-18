const fs = require('fs')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const buildComponentList = root => {
    let list = []
    const nodes = fs.readdirSync(root)
    nodes.forEach(it => {
        const node = path.resolve(root, it)
        if (it.endsWith('components/index.js')) return
        if (fs.statSync(node).isFile())
            list.push(node)
        else if (fs.statSync(node).isDirectory())
            list = [ ...list, ...buildComponentList(node) ]
    })
    return list
}

const makeEntry = file => {
    const name = file.replace(`${root}/`, '')
    return name.substring(0, name.length - path.extname(name).length)
}

const root = path.resolve(__dirname, 'src/components')
const components = buildComponentList(root)
const entries = components.reduce((acc, it) => ({
    ...acc,
    [makeEntry(it)]: it,
}), {})

// @todo also export a combined lib?

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    externals: [nodeExternals()],
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
                include: path.resolve(__dirname, './src')
            },
        ],
    },
}
