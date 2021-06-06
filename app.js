var createError = require('http-errors');
var express = require('express');
const bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  name : "session-id",
  secret : "My name is Dikshita.",
  resave : false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var indexRouter = require('./routes/index');
var aboutrouter = require('./routes/about');
var menuRouter = require('./routes/menu');
var contactRouter = require('./routes/contact');
var signupRouter = require('./routes/sign-up');
var signinRouter = require('./routes/sign-in');

const reservationRouter = require('./routes/reservation');

// Home route

app.use('/', indexRouter);

// Sign-up Route

app.use('/signup',signupRouter);

// Sign-in Route

app.use('/login',signinRouter);

// Reservation Route

app.use('/reservtable',reservationRouter);

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
