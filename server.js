var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
console.log('Serving from: ' + __dirname + '/dist/');
app.use(serveStatic(__dirname + '/dist/'));
app.use(serveStatic(__dirname + '/public/'));

var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started '+ port);
