var express = require('express');
var router = express.Router();
var app = module.export = express();
var bodyParser = require('body-parser');
var path = require('path');

var routes = require(path.join(__dirname, '/routes/router.js'));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'pug');
app.use('/res', express.static(path.join(__dirname, '/public/res')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(router);

app.use('/', routes);
app.listen('3000');

console.log('Got application running on port 3000');