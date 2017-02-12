// @TODO: https://github.com/postcss/autoprefixer

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import config from 'config';

module.exports = {
    entry: {
        index: [
            './src/js/index.js',
            './src/css/main.scss',
            './src/css/main.less',
        ],
    },
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/',
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.s?css$/, loader: ExtractTextPlugin.extract('css!sass') },
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/src/index.html`,
            hash: true,
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: false,
        }),
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(config),
        }),
    ],
};
