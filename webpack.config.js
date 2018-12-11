var path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'simple-text-highlighter',
        libraryTarget: 'umd'
    }
}