var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

//created .env module, so i have to require it here
require('dotenv').config();
//created config/database.js so we have to require it (already knows its js, so that part is not required)
require('./config/database');
//requiring so that we can use it elsewhere
require('./config/passport');



var indexRouter = require('./routes/index');
var trailsRouter = require('./routes/trails');
var reviewsRouter = require('./routes/reviews');
var songsRouter = require('./routes/songs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(function (req, res, next) {
  console.log('Its working!');
  next();  // Pass the request to the next middleware
});

app.use('/', indexRouter);
app.use('/trails', trailsRouter);
app.use('/', reviewsRouter);
app.use('/', songsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
