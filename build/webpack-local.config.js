const path = require('path');

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
    watch: true                                 // re-runs build and re-generates output files
};