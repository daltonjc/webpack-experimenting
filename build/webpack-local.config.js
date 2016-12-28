const path = require('path');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        filename: 'dist/bundle.js',
    },
    watch: true                                 // re-runs build and re-generates output files
};