const fs = require('fs')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const buildEntries = root => {
    let entries = {}
    const nodes = fs.readdirSync(root)
    nodes.forEach(it => {
        const node = path.resolve(root, it)
        const name = path.basename(node).replace(path.extname(node), '')
        if (it === 'index.js') return
        if (fs.statSync(node).isFile())
            entries[name] = node
        else if (fs.statSync(node).isDirectory())
            entries = { ...entries, ...buildEntries(node) }
    })
    return entries
}

const root = path.resolve(__dirname, 'src/components')
const entries = buildEntries(root)

module.exports = {
    /* entry: './src/components/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'md-tailwind',
        libraryTarget: 'commonjs',
    }, */
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        /* library: 'md-tailwind',
        libraryTarget: 'commonjs', */
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
                use: ['style-loader', 'css-loader'],
                include: path.resolve(__dirname, './src')
            },
        ],
    },
}
