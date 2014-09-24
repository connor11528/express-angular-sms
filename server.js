var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

// all environments
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.methodOverride())
app.use(express.bodyParser({ uploadDir: path.join(__dirname + '/uploads'), keepExtensions: true }))

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// API Routes
require('./server/config/routes')(app)

// start server
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
