const {TweetService, TrendService} = require('../service/scrape.service');
const logger                       = require('../logger/api.logger');



class TweetQueryController {

	async getTweets() {
		logger.info('Controller: getTweets')
		return await TweetService.getTweets();
	}


	async queryTweet(tweet) {
		logger.info('Controller: queryTweet', tweet);
		return await TweetService.queryTweet(tweet);
	}


	async updateTweet(tweet) {
		logger.info('Controller: updateTweet', tweet);
		return await TweetService.updateTweets(tweet);
	}


	async deleteTweet(tweetId) {
		logger.info('Controller: deleteTweet', tweetId);
		return await TweetService.deleteTweet(tweetId);
	}
}



class TrendQueryController {

	async getTrends() {
		logger.info('Controller: getTrends')
		return await TrendService.getTrends();
	}


	async queryTrend(trend) {
		logger.info('Controller: queryTrend', trend);
		return await TrendService.queryTrend(trend);
	}


	async updateTrend(trend) {
		logger.info('Controller: updateTrend', trend);
		return await TrendService.updateTrends(trend);
	}


	async deleteTrend(trendId) {
		logger.info('Controller: deleteTrend', trendId);
		return await TrendService.deleteTrend(trendId);
	}
}



module.exports = [TweetQueryController, TrendQueryController];
