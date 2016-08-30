/* eslint-env node */

const path = require('path');

const webpack = require('webpack');
const loaderUtils = require('loader-utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssUrl = require('webpack-utils/cssUrl');
const cssImport = require('postcss-import');

const rootPath = path.resolve('./src');

const isProduction = process.env.NODE_ENV === 'production';

process.env.NODE_ENV = isProduction ? 'production' : 'development';

const CSS_CLASS_TEMPLATE = isProduction ? '[hash:base64:5]' : '[path][name]-[local]';

const fileCache = {};


const cssLoaderQuery = {
    modules: true,
    importLoaders: 2,
    url: false,
    localIdentName: CSS_CLASS_TEMPLATE,

    /**
     * cssnano options
     */
    sourcemap: !isProduction,
    autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
    },
    safe: true,
    // отключаем минификацию цветов, что бы она не ломала такие выражения:
    // composes: black from './buttons.scss';
    colormin: false,
    discardComments: {
        removeAll: true
    }
};

var webpackConfig = {
    entry: {
        app: path.join(__dirname, 'src')
    },

    target: isProduction ? 'node' : 'web',

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: isProduction ? '[name].js' : '[name].js?[hash]',
        libraryTarget: isProduction ? 'commonjs' : undefined
    },

    resolve: {
        root: rootPath,
        extensions: ['', '.js', '.jsx']
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        // proxy: {
        //     '/api*': {
        //         headers: {
        //             host: config.apiHost.replace(/https?:|\//g, '')
        //         },
        //         target: config.apiHost
        //     }
        // },
        hot: true,
        inline: true,
        historyApiFallback: true
    },

    devtool: 'eval',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            __DEV__: !isProduction,
            __PROD__: isProduction
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            favicon: 'src/favicon.ico',
            filename: 'index.html',
            inject: false
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.scss$/,
                extractInProduction: true,
                loader: 'style!css?' + JSON.stringify(cssLoaderQuery) + '!sass!postcss?syntax=postcss-scss'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                loader: 'file',
                query: {
                    name: 'assets/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                loader: 'file',
                query: {
                    name: 'assets/fonts/[name].[ext]?[hash]'
                }

            },
            {
                test: /\.json$/,
                exclude: /(intl|font)\.json/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.intl\.json$/,
                loader: 'babel!intl!json'
            },
            {
                test: /\.font\.(js|json)$/,
                loader: 'raw!fontgen'
            }
        ]
    },

    resolveLoader: {
        alias: {
            intl: path.resolve('webpack-utils/intl-loader')
        }
    },

    postcss() {
        return [
            cssImport({
                path: rootPath,
                addDependencyTo: webpack,

                resolve: ((defaultResolve) =>
                    (url, basedir, importOptions) =>
                        defaultResolve(loaderUtils.urlToRequest(url), basedir, importOptions)
                )(require('postcss-import/lib/resolve-id')),

                load: ((defaultLoad) =>
                    (filename, importOptions) => {
                        if (/\.font.(js|json)$/.test(filename)) {
                            if (!fileCache[filename] || !isProduction) {
                                // do not execute loader on the same file twice
                                // this is an overcome for a bug with ExtractTextPlugin, for isProduction === true
                                // when @imported files may be processed mutiple times
                                fileCache[filename] = new Promise((resolve, reject) =>
                                    this.loadModule(filename, (err, source) =>
                                        err ? reject(err) : resolve(this.exec(source))
                                    )
                                );
                            }

                            return fileCache[filename];
                        }

                        return defaultLoad(filename, importOptions);
                    }
                )(require('postcss-import/lib/load-content'))
            }),

            cssUrl(this)
        ];
    }
};

if (isProduction) {
    webpackConfig.module.loaders.forEach((loader) => {
        if (loader.extractInProduction) {
            // remove style-loader from chain and pass through ExtractTextPlugin
            const parts = loader.loader.split('!');

            loader.loader = ExtractTextPlugin.extract(
                parts[0], // style-loader
                parts.slice(1) // css-loader and rest
                    .join('!')
                    .replace(/[&?]sourcemap/, '')
            );
        }
    });

    webpackConfig.plugins.push(new ExtractTextPlugin('styles.css', {
        allChunks: true
    }));

    webpackConfig.devtool = false;
}

if (!isProduction) {
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    );
}

module.exports = webpackConfig;
