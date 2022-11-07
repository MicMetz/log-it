"use strict";


const express = require('express');
const bodyParser = require('body-parser');
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require('express-session');
const flash = require("connect-flash");
const path = require("path");
// var reload                                         = require('reload')
const {TweetQueryController, TrendQueryController} = require('./controller/scrape.controllers')

require('dotenv').config()
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());
app.set("views", path.join(__dirname, "/views"));
app.set('view engine', 'ejs');

// DEV DEPENDENCIES
// const livereload = require("livereload");
// const connectLivereload = require("connect-livereload");
// const open = require('open');
// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });
// open('http://localhost:3081');

// app.use(connectLivereload());

app.use(session({
    secret           : 'onTheDL',
    resave           : true,
    saveUninitialized: true,
    cookie           : {maxAge: 60000}
}))


app.use((req, res, next) => {
    // if(req.session.user) {
    //     app.locals.role = req.session.user.role;
    //     next();
    // } else {
    //     app.locals.isLoggedIn = false;
    //     app.locals.role = null;
    //     next();
    // }
    // TODO:
    app.locals.role = null;
});


app.get('/', (req, res, next) => {
    var tweets = null;
    var trends = null;
    var role = null;

    const testExecution = () => {

        console.log("Controller Test: getTweets - Start");
        tweets = TweetQueryController.getTweets();
        console.log("Controller Test: getTweets - End");

        console.log("Controller Test: queryTweet - Start");
        trends = TrendQueryController.getTrends();
        console.log("Controller Test: queryTweet - End");

        console.log(tweets);
        console.log(trends);
    }

    res.render('index', {tweets, trends, role: null});
    // res.render('index');
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


// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });


app.search('/search/tweet', (req, res) => {});


module.exports = app;


const port = process.env.PORT || 3081;
app.listen(port, (err) => {
	if (err) {
		console.log(err);
		setTimeout(() => {
			console.log(`App refreshed due to crash: http://localhost:${port}`);
			app.refresh("/");
		}, 100);
	}
	console.log(`http://localhost:${port}`);
});
