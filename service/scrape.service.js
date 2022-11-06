const {TweetRepository, TrendRepository} = require('../repository/scrape.repository');



class TweetService {

	constructor() {}


	async getTweets() {
		return await TweetRepository.getTweets();
	}


	async queryTweet(tweet) {
		return await TweetRepository.queryTweet(tweet);
	}


	async updateTweet(tweet) {
		return await TweetRepository.updateTweets(tweet);
	}


	async deleteTweet(tweetId) {
		return await TweetRepository.deleteTweet(tweetId);
	}

}



class TrendService {

	constructor() {}


	async getTrends() {
		return await TrendRepository.getTrends();
	}


	async queryTrend(trend) {
		return await TrendRepository.queryTrend(trend);
	}


	async updateTrend(trend) {
		return await TrendRepository.updateTrends(trend);
	}


	async deleteTrend(trendId) {
		return await TrendRepository.deleteTrend(trendId);
	}

}



module.exports = [TweetService, TrendService];
