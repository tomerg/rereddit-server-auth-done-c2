var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/rereddit');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

mongoose.connect(process.env.MONGOLAB_YELLOW_URI || 'mongodb://localhost/rereddit-dev');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/users', users); 

var port = process.env.PORT || '4000';

app.listen(port);
