const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        host: 'localhost',
        port: 3000,
        open: true,
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [ {
                loader: 'html-loader',
                options: {
                minimize: true,
                removeComments: false,
                collapseWhitespace: false
                }
            }],
        }]
    }
  };