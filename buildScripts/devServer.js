import webpack from 'webpack';
import open from 'open';
import webpackdevserver from 'webpack-dev-server';
import config from '../webpack.config.dev';
import morgan from 'morgan';
import log4js from 'log4js';
import fs from 'file-system';
import cors from 'cors';
import favicon from 'serve-favicon';

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
var app = new webpackdevserver(compiler, webServerConfig);

app.use(cors());

// cors whitelist - useful if API is split from static SPA
var whitelist = ['http://eg1.com', 'http://eg2.com'];
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
    }
};

app.use(favicon(__dirname + '/favicon.png'));

var log = log4js.getLogger('devServer');
// setup the http logger (using Morgan)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    log.Error('We have a problem', err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
    next(err);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
        console.info('==> 🌎 Listening on port %s', port);
    }
});