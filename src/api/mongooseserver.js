'use strict';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

/* eslint-disable no-console */

var app = express();

// code to persist in mongo
mongoose.connect('mongodb://localhost/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./api/mongooseroute.js')(app);

app.listen(3001, function() {
    console.log('Server running at http://127.0.0.1:3001/');
});