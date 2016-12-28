const path = require('path');

module.exports = {
    entry: [
        './src/app'
    ],
    output: {
        filename: 'dist/bundle.js',
    },
    resolve: {
        root: path.resolve('src')
    },
    watch: true                                 // re-runs build and re-generates output files
};