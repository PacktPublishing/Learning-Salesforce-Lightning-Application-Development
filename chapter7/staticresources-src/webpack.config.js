const webpack = require('webpack'),
path = require('path'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath  = path.join(__dirname, 'src'),
  distPath = path.join(__dirname, '../force-app/main/default/staticresources'),
  extractCSS = new ExtractTextPlugin('styles.resource');

module.exports = {
module: {
    rules: [
        // Lint our ES6 code and transpile it into ES5 as a part of app.resource
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                }
            },
            { loader: "eslint-loader" },
            ]
        },
        // Load choices.js, remove polyfills' effects, and include it into app.resource
        {
            test: /\/choices\.js\/assets\/scripts\/dist/,
            use: [ 'unpolyfill-loader', 'imports-loader?define=>false' ],
        },
        // Load all CSS files and compile them in a single artifact styles.resource
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
            }),
        },
        // Load all pictures and fonts and embed them into styles.resource
        {
            test: /\.(woff2?|ttf|eot|jpe?g|png|gif|svg)$/,
            use: 'url-loader',
        },
    ],
},
// resolve loaders from node_modules and our newly created "loaders" folder 
resolveLoader: {
    modules: [ 'node_modules', path.resolve(__dirname, 'loaders') ],
},
// this is where our source code is stored
context: srcPath,
// single entry point
entry: {
    app: './index.js',
},
output: {
    // output file into SFDX staticresources location
    path: distPath,
    filename: 'app.resource',
    libraryTarget: 'window',
    library: 'StaticResource'
},
resolve: {
    modules: ["node_modules"],
},
plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    extractCSS,
]
};