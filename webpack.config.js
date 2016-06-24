var fs = require('fs');
var path = require('path');
var config = require('config');
var webpack = require('webpack');

module.exports = {

    devtool: 'inline-source-map',

    entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
        if (config.prefixes[dir] && fs.statSync(path.join(__dirname, dir)).isDirectory())
            entries[dir] = path.join(__dirname, dir, 'app.js')

        return entries
    }, {}),

    output: {
        path: __dirname + '/__build__',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__build__/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },

    // resolve: {
    //     alias: {
    //         'react-router': path.join(__dirname, '..', 'modules')
    //     }
    // },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.NoErrorsPlugin()
    ]

}