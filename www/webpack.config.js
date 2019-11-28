const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_, argv) => ({
    entry: "./src/bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    devtool: argv.mode === 'development' ? 'source-map' : undefined,
    devServer: {
        contentBase: './dist',
        inline: true,
        injectHot: true,
        // hotOnly: true,
        hot: true,
        liveReload: false,
    },
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        // hydratable: true,
                        // hotReload: true,
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!html-loader!./index.html'
        }),
    ],
});
