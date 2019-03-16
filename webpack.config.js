/* eslint-env node */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            extensions: ['.js', '.jsx'],
        },

        resolveLoader: {
            alias: {
                'image-size-loader': path.join(__dirname, 'node_modules/@eoleo/image-size-loader/dist/cjs.js'),
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
            new HtmlWebpackPlugin({
                template: 'src/index.ejs',
                favicon: 'src/favicon.ico',
                filename: 'index.html',
                inject: false,
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            targets: isProduction ? {
                                                node: '8',
                                            } : {
                                                browsers: [
                                                    'last 1 chrome version',
                                                    'last 1 firefox version',
                                                ],
                                            },
                                        },
                                    ],
                                    [
                                        '@babel/preset-react',
                                        {
                                            development: !isProduction,
                                        },
                                    ],
                                ],
                                plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-proposal-export-default-from',
                                    // TODO: by unknown reasons react-intl plugins isn't working.
                                    //       investigate later
                                    ['react-intl', {
                                        messagesDir: path.join(__dirname, 'dist/messages/'),
                                    }],
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
                {
                    test: /\.intl\.json$/,
                    loader: 'intl-json-loader',
                    type: 'javascript/auto',
                },
            ]
        },
    };
};
