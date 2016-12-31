const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: [
        './src/app'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        root: path.resolve('src')
    },
    devServer: {
        outputPath: path.resolve('dist')        // required for write-file-webpack-plugin, must match output.path, hopefully can be removed with later webpack versions as root cause was fixed with webpack issue https://github.com/webpack/webpack-dev-server/issues/337
    },
    plugins: [
        new WriteFilePlugin()
    ],
    watch: true
};