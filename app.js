var createError = require('http-errors');
var express = require('express');
const bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// // Authentication 

// function auth (req, res, next) {
//   console.log(req.headers);
//   var authHeader = req.headers.authorization;
//   if (!authHeader) {
//       var err = new Error('You are not authenticated!');
//       res.setHeader('WWW-Authenticate', 'Basic');
//       err.status = 401;
//       next(err);
//       return;
//   }

//   var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
//   var user = auth[0];
//   var pass = auth[1];
//   if (user == 'admin' && pass == 'password') {
//       next(); // authorized
//   } else {
//       var err = new Error('You are not authenticated!');
//       res.setHeader('WWW-Authenticate', 'Basic');      
//       err.status = 401;
//       next(err);
//   }
// }

// app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var aboutrouter = require('./routes/about');
var menuRouter = require('./routes/menu');
var contactRouter = require('./routes/contact');
var signupRouter = require('./routes/sign-up');
var signinRouter = require('./routes/sign-in');
const { futimesSync } = require('fs');

// Home route

app.use('/', indexRouter);

// Sign-up Route

app.use('/signup',signupRouter);

// Sign-in Route

app.use('/login',signinRouter);

// About Route

app.use('/about', aboutrouter);

// menu Route

app.use('/menu', menuRouter);

// Contact route

app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
