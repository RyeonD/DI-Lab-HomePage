var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const createError = require('http-errors');

var logger = require('morgan');
const api = require('./controller');
var app = express();

app.use(logger('dev'));
app.use(express.json({  limit:'50mb' }));
app.use(express.urlencoded({ limit:'50mb',extended: false }));
app.use(cookieParser());
app.use('/api', api)
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(process.env.BUILD_PATH))
  app.use('/public/uploads', (req,res) => {
    res.sendFile(path.join(__dirname, req.originalUrl))
  })
  // app.all('*', (req, res, next) => {
    //   res.redirect('https://'+req.headers.host + req.url)
    // http => https로 redirect
    // })
    app.get('*', (req, res)=> {
      res.sendFile(path.resolve(process.env.BUILD_PATH, 'index.html'));
    })
  }
else{    
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/public/uploads', (req,res) => {
      res.sendFile(path.join(__dirname, req.originalUrl))
    })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    console.log(err)
    res.locals.message = err.message;
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
module.exports = app;
