var bluebird = require('bluebird')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var index = require('./routes/index.route');
var users = require('./routes/users.route');
var api = require('./routes/api.route')
var compression = require('compression');
var app = express();
var mongoose = require('mongoose')


var swaggerUi = require('swagger-ui-express')
var  swaggerDocument = require('./../swagger.json')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", " Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(compression());

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.use('/api/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = app;
