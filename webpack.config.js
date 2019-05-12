/* eslint-env node */

const path = require('path');

const { ContextReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const SUPPORTED_LANGUAGES = Object.keys(require('./src/i18n/index.json'));

module.exports = (env, { mode = 'development' }) => {
    const isProduction = mode === 'production';

    return {
        devtool: isProduction ? false : 'source-map',

        entry: {
            app: path.join(__dirname, 'src'),
        },

        target: isProduction ? 'node' : 'web',

        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: isProduction ? '[name].js' : '[name].js?[hash]',
            libraryTarget: isProduction ? 'commonjs2' : undefined,
        },

        resolve: {
            modules: [
                path.join(__dirname, 'src'),
                path.join(__dirname, 'node_modules'),
            ],
            extensions: ['.tsx', '.ts', '.js'],
        },

        resolveLoader: {
            alias: {
                'image-size-loader': path.join(__dirname, 'node_modules/@lesechos/image-size-loader/index.js'),
            },
        },

        devServer: {
            host: 'localhost',
            port: 8080,
            hot: true,
            inline: true,
            historyApiFallback: true,
        },

        plugins: [
            new ContextReplacementPlugin(/i18n/, new RegExp(`/(${SUPPORTED_LANGUAGES.join('|')})\\.json`)),
            new ContextReplacementPlugin(/locale-data/, new RegExp(`/(${SUPPORTED_LANGUAGES.join('|')})\\.js`)),
            new HtmlWebpackPlugin({
                template: 'src/index.ejs',
                favicon: 'src/favicon.ico',
                filename: 'index.html',
                inject: false,
            }),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                generateStatsFile: true,
                analyzerMode: isProduction ? 'static': 'server',
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', {
                                        targets: isProduction ? {
                                            node: '8',
                                        } : {
                                            browsers: [
                                                'last 1 chrome version',
                                                'last 1 firefox version',
                                            ],
                                        },
                                    }],
                                    ['@babel/preset-react', {
                                        development: !isProduction,
                                    }],
                                    ['@babel/preset-typescript', {
                                        jsx: true,
                                    }],
                                ],
                                plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-proposal-export-default-from',
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|gif|jpg|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: 'assets/[name]-[folder].[ext]?[hash]',
                    },
                },
                // The explicit declaration of the json loader allows us to disable the built-in
                // webpack 4 loader for json, which interferes with the work of text2png-loader
                {
                    test: /\.json$/,
                    exclude: /\.intl\.json$/,
                    loader: 'json-loader',
                    type: 'javascript/auto',
                },
                {
                    test: /\.intl\.json$/,
                    loader: 'intl-json-loader',
                    type: 'javascript/auto',
                },
            ],
        },
    };
};
