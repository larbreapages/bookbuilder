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
        path: `${__dirname}/dist`,
        filename: 'bookbuilder.js',
    },
    module: {
        loaders: [
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.json$/, use: 'json-loader' },
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader!less-loader' }) },
            { test: /\.s?css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader!sass-loader' }) },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
                loader: 'url-loader',
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
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: false,
        }),
        new webpack.DefinePlugin({
            CONFIG: JSON.stringify(config),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ],
};
