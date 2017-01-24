var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// code to persist in mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var api = require('./api/mongooseroute.js')(app);

var server = app.listen(3001, function() {
    console.log('Server running at http://127.0.0.1:3001/');
});