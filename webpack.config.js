/* eslint-env node */

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve('./src');

const isProduction = process.env.NODE_ENV === 'production';

process.env.NODE_ENV = isProduction ? 'production' : 'development';

const webpackConfig = {
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
        hot: true,
        inline: true,
        historyApiFallback: true
    },

    devtool: isProduction ? false : 'eval',

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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                loader: 'file',
                query: {
                    name: 'assets/[name]-[folder].[ext]?[hash]'
                }
            },
            {
                test: /\.json$/,
                exclude: /(intl|font)\.json/,
                loader: 'json'
            },
            {
                test: /\.intl\.json$/,
                loader: 'babel!intl!json'
            }
        ]
    },

    resolveLoader: {
        alias: {
            intl: path.resolve('webpack-utils/intl-loader')
        }
    }
};

if (!isProduction) {
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    );
}

module.exports = webpackConfig;
