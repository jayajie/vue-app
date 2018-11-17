const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new vueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.(eot|ttf|woff|woff2|svg)$/, use: 'url-loader'}
        ]
    },
    devServer: {
        host: '0.0.0.0',
        useLocalIp: true
    }
}