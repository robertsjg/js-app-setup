import webpack from 'webpack';
import opendev from 'open';
import webpackdevserver from 'webpack-dev-server';
import config from '../webpack.config.dev';
import morgan from 'morgan'; // http logging
import log4js from 'log4js'; // app logging
import fs from 'file-system';
import cors from 'cors'; // Cross-Origin Resource Sharing
import favicon from 'serve-favicon';
import dotenv from 'dotenv';

/* eslint-disable no-console, no-unused-vars */

dotenv.config();

log4js.configure(process.env.LOG4JS_CONFIG_FILE);

var log = log4js.getLogger('devServer');

log.info('Starting server initialization');

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

const port = process.env.NODE_PORT;
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

app.use(favicon('favicon.png'));

// setup the http logger (using Morgan)
var accessLogStream = fs.createWriteStream('./log/access.log', { flags: 'a' });
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
        log.Error('We have a problem', err);
    } else {
        opendev('http://localhost:' + port);
        log.info('Server initialized');
        console.info('==> 🌎 Listening on port %s', port);
    }
});