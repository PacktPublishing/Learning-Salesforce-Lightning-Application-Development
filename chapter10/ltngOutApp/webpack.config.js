var path = require('path');
var webpack = require('webpack');

const config = {
    mode: 'development',
    entry: './app.js',
    output: {
        path: path.join(__dirname, '/app.bundle.js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
module.exports = config;