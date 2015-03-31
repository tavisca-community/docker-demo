
//Module dependencies.
var express = require('express');
var cors = require('cors')
var engine = require('ejs-locals');
var http = require('http');
var path = require('path');

// routes
var routes = require('./server/site/routes');

// api
var imagesApi = require('./server/service/image.js');

var app = express();
app.use(cors());

// all environments
app.set('port', process.env.PORT || 8400);
app.set('views', __dirname + '/server/site/views');
app.set('view engine', 'ejs');
app.engine('ejs', engine);


// express related stuff
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'server/site/public'), { maxAge: Infinity }));


// development only
process.config.environment = app.get('env');
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}


// ***************************************************
// ****************** Service route ******************
// ***************************************************

// ################# images api ####################
// get all images
app.get('/service/images', imagesApi.getAll);

// *************************************************
// ***************** site route ********************
// *************************************************


// ################ question #######################
// index page
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});