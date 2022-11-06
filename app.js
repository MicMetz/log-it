"use strict";


const express                                      = require('express');
const bodyParser                                   = require('body-parser');
const session                                      = require('express-session');
const flash                                        = require("connect-flash");
// var reload                                         = require('reload')
const {TweetQueryController, TrendQueryController} = require('./controller/scrape.controllers')
const path                                         = require("path");

require('dotenv').config()
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());
app.set('view engine', 'ejs');

// DEV DEPENDENCIES
// const livereload        = require("livereload");
// const connectLivereload = require("connect-livereload");
// const liveReloadServer  = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
// 	setTimeout(() => {
// 		liveReloadServer.refresh("/");
// 	}, 100);
// });
// app.use(connectLivereload());

app.use(session({
	secret:            'onTheDL',
	resave:            true,
	saveUninitialized: true,
	cookie:            {maxAge: 60000}
}))




app.get('/', (req, res, next) => {
	res.render('index');
});

app.get('/trends', (req, res, next) => {
	TrendQueryController.getTweets().then(data => res.json(data));
	res.render('trends');
});

app.get('/tweets', (req, res, next) => {
	TweetQueryController.getTweets().then(data => res.json(data));
	res.render('tweets');
});


app.use((req, res, next) => {
	res.render('error404');
});


app.generate = function () {

}


app.search('/search/tweet', (req, res) => {});




const port = process.env.PORT || 3081;
app.listen(port, (err) => {
	// Under error circumstances log error.
	if (err) {
		console.log(err);
		setTimeout(() => {
			console.log(`App refreshed due to crash: http://localhost:${port}`);
			app.refresh("/");
		}, 100);
	}
	console.log(`http://localhost:${port}`);
});
// reload(app);
