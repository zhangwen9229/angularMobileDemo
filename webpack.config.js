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
        app: [
            'webpack-dev-server/client?http://127.0.0.1:9000', // WebpackDevServer host and port
            'webpack/hot/dev-server',
            __dirname + '/core/bootstrap.js'
        ]
    },
    output: {
        path: PATHS.app + '/dist/',
        filename: "bundle.js", //打包后的名字
        publicPath: "http://localhost:9000/" //html引用路径，在这里是本地地址。
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css?sourceMap"
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