/* eslint-env node */

const path = require('path');

const { ContextReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const nodeExternals = require('webpack-node-externals');

const SUPPORTED_LANGUAGES = Object.keys(require('./src/i18n/index.json'));

module.exports = (env, { mode = 'development', application = 'server' }) => {
    const isProduction = mode === 'production';
    const isDevelopment = !isProduction;
    const isDevTool = application === 'devtool';
    const isServer = !isDevTool;

    return {
        devtool: isDevTool ? 'source-map' : false,

        entry: {
            app: path.join(__dirname, 'src', application),
        },

        target: isServer ? 'node' : 'web',

        externals: isServer ? [nodeExternals()] : [],

        node: {
            __dirname: false,
        },

        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].js',
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
                analyzerMode: isDevTool ? 'server' : 'static',
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
                                        targets: isServer ? {
                                            node: isDevelopment ? 'current' : '12',
                                        } : {
                                            browsers: [
                                                'last 1 chrome version',
                                                'last 1 firefox version',
                                            ],
                                        },
                                    }],
                                    ['@babel/preset-react', {
                                        development: isDevelopment,
                                    }],
                                    ['@babel/preset-typescript', {
                                        jsx: true,
                                    }],
                                ],
                                plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-proposal-export-default-from',
                                    '@babel/plugin-syntax-dynamic-import',
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
