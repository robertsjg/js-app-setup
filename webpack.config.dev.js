import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    name: 'client',
    devtool: 'inline-source-map',
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
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
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
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    }
};


/*[,
    {
        name: 'server',
        entry: '.src/api/index.js',
        target: 'node'
    }];*/