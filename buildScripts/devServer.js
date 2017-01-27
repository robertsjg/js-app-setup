import webpack from 'webpack';
import open from 'open';
import webpackdevserver from 'webpack-dev-server';
//var WebpackDevServer = require('webpack-dev-server')
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const compiler = webpack(config);

var webServerConfig = {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
};
const port = 3000;

var server = new webpackdevserver(compiler, webServerConfig);

server.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
        console.info('==> 🌎 Listening on port %s', port);
    }
});