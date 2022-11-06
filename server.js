const express                                      = require('express');
const bodyParser                                   = require('body-parser');
const {TweetQueryController, TrendQueryController} = require('./controller/scrape.controllers')

require('dotenv').config()
const app = express();
app.use(bodyParser.json());




app.get('/api/tweets', (req, res) => {
	TweetQueryController.getTweets().then(data => res.json(data));


});


app.get('/api/trends', (req, res) => {
	TweetQueryController.getTweets().then(data => res.json(data));
});


app.search('/api/tweet', (req, res) => {
	console.log(req.body);
	TweetQueryController.queryTweet(req.body.tweet).then(data => res.json(data));
});


app.put('/api/tweet', (req, res) => {
	TweetQueryController.updateTweet(req.body.tweet).then(data => res.json(data));
});


app.delete('/api/tweet/:id', (req, res) => {
	TweetQueryController.deleteTweet(req.params.id).then(data => res.json(data));
});


app.get('/', (req, res) => {
	res.send(`<h1>API Works !!!</h1>`)
});



const port = process.env.PORT || 3000;
app.listen(port, (err) => {
	// Under error circumstances log error.
	if (err) {
		console.log(err);
		/*setTimeout(() => {
		 console.log(`App refreshed due to crash: http://localhost:${port}`);
		 app.refresh("/");
		 }, 100);*/
	}
	console.log(`http://localhost:${port}`);
});
