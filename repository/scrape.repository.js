const {connect} = require('../config/db.config');
const logger    = require('../logger/api.logger');



class TweetRepository {

	db = {};


	constructor() {
		this.db    = connect();
		this.spawn = require('child_process').spawn;
	}


	async getTweets() {
		return new Promise((resolve, reject) => {
			const scraperProcess_Tweets = this.spawn('python', ['twitter-scraper/lib/modules/tweets.py']);
			scraperProcess_Tweets.stdout.on('data', (data) => {
				resolve(data);
			});
		});
	}



	async queryTweet(tweet) {}


	async updateTweets(tweet) {}


	async deleteTweet(tweetId) {}
}



class TrendRepository {

	db = {};


	constructor() {
		this.db    = connect();
		this.spawn = require('child_process').spawn;
	}


	async getTrends() {
		return new Promise((resolve, reject) => {
			const scraperProcess_Trends = this.spawn('python', ['twitter-scraper/lib/modules/trends.py']);
			scraperProcess_Trends.stdout.on('data', (data) => {
				resolve(data);
			});
		});
	}


	async queryTrend(trend) {}


	async updateTrends(trend) {}


	async deleteTrend(trendId) {}



}



module.exports = [TweetRepository, TrendRepository];
