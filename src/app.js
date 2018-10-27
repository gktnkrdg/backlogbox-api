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



mongoose.Promise = bluebird
mongoose.connect('mongodb+srv://admin:mJaE4dZl3X5N6th1@cluster0-4ydds.mongodb.net/backlogger?retryWrites=true', { promiseLibrary: require('bluebird') })
.then(()=> { console.log(`Succesfully Connected to the
Mongodb Database  at URL : mongodb://@cluster0-4ydds.mongodb.net/backlogger`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb 
Database at URL : mongodb://@cluster0-4ydds.mongodb.net/backlogger`)})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", " Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(compression()); //Compress all routes
app.post("/api/github", function (req, res) {
  var sender = req.body.sender;
  var branch = req.body.ref;

  if(branch.indexOf('master') > -1){
      console.log("works")
  }
})
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
