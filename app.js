var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var indexController = require('./controllers/index.js');
var browseController = require('./controllers/browse.js');

mongoose.connect('mongodb://localhost/vgtrackr');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/browse', browseController.browse);
app.get('/views/:gameid', browseController.viewGame);
app.get('/collection', indexController.collection);
app.get('/stats', indexController.stats);
app.get('/wtfmachine', indexController.wtfmachine);
app.get('/newstuff', indexController.newstuff);

var server = app.listen(4484, function() {
	console.log('Express server listening on port ' + server.address().port);
});
