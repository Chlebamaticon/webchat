/* tslint:disable */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    target: 'node',
    mode: 'development',

    context: path.resolve(__dirname, 'src'),

    devtool: 'source-map',

    entry: './index.ts',

    resolve: {
        extensions: [ '.js', '.ts' ],
        plugins: [
            new TsconfigPathsWebpackPlugin({
                configFile: path.resolve(__dirname, 'src', 'tsconfig.json'),
                extensions: [
                    '.js', '.ts'
                ]
            })
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        chunkFilename: '[name].chunk.js'
    },

    externals: [
        nodeExternals(),
    ],

    module: {
        rules: [

            {
                test: /\.(js|ts)x?/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        happyPackMode: true
                    }
                },
            },

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new ForkTsCheckerWebpackPlugin({
            tsconfig: './tsconfig.json',
            tslint: './tslint.json',
            checkSyntacticErrors: true,
        }),
    ],

    devServer: {
        port: 4200,
        host: '0.0.0.0',
        hot: true,
    },

    optimization: {
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    reuseExistingChunk: true
                }
            }
        }
    }
};