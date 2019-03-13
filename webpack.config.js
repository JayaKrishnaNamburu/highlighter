var path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'text-highlighter-regex',
        libraryTarget: 'umd'
    }
}