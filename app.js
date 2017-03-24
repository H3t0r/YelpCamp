var express 		= require('express'),
	mongoose		= require('mongoose'),
	bodyParser 		= require('body-parser'),
	methodOverride	= require('method-override');
	app 			= express();
/**
 * Configuration
 */
// parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
// serve static files
app.use(express.static(__dirname + '/public'));
// use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('_method'));
// use ejs as template engine
app.set('view engine', 'ejs');
/**
 * Routing
 */
// landing route
app.get('/', function (req, res) {
	res.render('landing');
});
// campgrounds index route
app.get('/campgrounds', function (req, res) {
	res.render('index');
});
/**
 * start app
 */
app.listen(3000, function () {
	console.log('YelpCamp started and listening on http://localhost:3000');
});