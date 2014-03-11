var express = require('express');
var http = require('http');
var path = require('path');
var port = process.env.PORT || 3000;

var message = require('./routes/message');

var app = express();

// all environments
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.favicon());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// API Routes
app.get('/messages', message.findAll);
app.get('/messages/:id', message.findById);
app.post('/messages/send/:number/:message', message.sendSMS);

// every other route angular will handle
app.get('/*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// start server
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
