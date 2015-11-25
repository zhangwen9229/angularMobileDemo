var path = require('path'),
    webpack = require('webpack');

// PATHS
var PATHS = {
    app: __dirname,
    publicPath: __dirname + '/dist/',
    bower: __dirname + '/bower_components'
};

module.exports = {
    context: PATHS.app,
    entry: {
        app: [__dirname + '/core/bootstrap.js']
    },
    output: {
        path: PATHS.app + '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel!jshint',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'sourcemap',
    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: __dirname
    }
};