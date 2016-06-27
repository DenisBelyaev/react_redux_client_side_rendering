var fs = require('fs');
var path = require('path');
var config = require('config');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rimraf = require('rimraf');

const NODE_ENV = process.env.NODE_ENV;

let getEntry = () => {
    return fs.readdirSync(__dirname).reduce(function (entries, dir) {
        if (config.prefixes[dir] && fs.statSync(path.join(__dirname, dir)).isDirectory()) {
            //  entries[dir] = ['babel-polyfill', path.join(__dirname, dir, 'app.js')]
            entries[dir] = path.join(__dirname, dir, 'app.js');

            entries[dir + '_styl'] = path.join(__dirname, dir, 'styles');
        }

        return entries
    }, {})
}

module.exports = {

    entry: getEntry(),

    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/public/'
    },

    devtool: NODE_ENV == "development" ? "chip-inline-module-source-map" : null,

    watch: true,

    watchOptions: {
        aggregateTimeout: 100 //default 300
    },

    configLoader: {
        env: NODE_ENV || 'dev',
        instance: 'server'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                /*
                 resolve url переписывает все пути относительно (menu.styl) корневого файла
                 'style' обертка для сss котрый хранится в js
                 */
                test:   /\.styl$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css!stylus?resolve url&sourceMap'),
                //loader: 'style!css!autoprefixer?browsers=last 2 versions!stylus?resolve url'
            },

            {
                test: /.*\.configloaderrc$/,
                loader: 'node-config-loader/webpack'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.styl']
    },

    resolveLoaders: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loaders', '*'],
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'shared'}),
        //new webpack.optimize.CommonsChunkPlugin({name: 'shared', chunks: ['admin', 'client']}),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        /*
         ExtractTextPlugin выносит стили из основных чанков, allChunks:true выносит из всех чанков
         contenthash для изменения кеша браузера
         disable - для интеграции с HotModuleReplacement, динамическая перезагрузка css
         */
        new ExtractTextPlugin('[name].css', {allChunks: true}),//disable: true


        new webpack.NoErrorsPlugin(),

        {
            apply: (compiler) => {
                rimraf.sync(compiler.options.output.path);
            }
        },
    ]

}

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifeJsPlugin({
            warnings: false,
            drop_console: true,
            unsafe: true
        })
    )
}
