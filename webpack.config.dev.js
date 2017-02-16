import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    name: 'client',
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/index'),
        path.resolve(__dirname, 'src/canvas')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),

        // ensures html file has ref to bundle.js
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/canvas.html',
            filename: 'canvas.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.html$/, loaders: ['raw-loader'] }
        ]
    }
};

/*[,
    {
        name: 'server',
        entry: '.src/api/index.js',
        target: 'node'
    }];*/