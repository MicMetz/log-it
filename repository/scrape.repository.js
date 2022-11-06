const {connect}   = require('../config/db.config');
const PythonShell = require('python-shell').PythonShell;
const logger      = require('../logger/api.logger');



class TweetRepository {

	db = {};


	constructor() {
		this.db      = connect();
		this.shell   = null;
		this.options = {
			mode:          'json',
			pythonPath:    'python',
			pythonOptions: ['-u'],
			scriptPath:    'twitter-scraper/lib/modules',
			args:          ['value1', 'value2', 'value3']
		};
	}


	async getTweets() {
		return new Promise((resolve, reject) => {
			this.options.args = [];
			this.shell        = PythonShell.run("tweets.py", this.options);
			this.shell.on('message', (message) => {
				resolve(message);
			});
			this.shell.end((err, code, signal) => {
				if (err) {
					logger.error(err);
					reject(err);
				}
				logger.info(`The exit code was: ${code}`);
				logger.info(`The exit signal was: ${signal}`);
			});

		});
	}


	async queryTweet(args) {
		return new Promise((resolve, reject) => {
			this.options.args = [args];
			this.shell        = PythonShell.run("tweets.py", this.options);
			this.shell.on('message', (message) => {
				resolve(message);
			});
			this.shell.end((err, code, signal) => {
				if (err) {
					logger.error(err);
					reject(err);
				}
				logger.info(`The exit code was: ${code}`);
				logger.info(`The exit signal was: ${signal}`);
			});

		});
	}


	async updateTweets(tweet) {}


	async deleteTweet(tweetId) {}
}



class TrendRepository {

	db = {};


	constructor() {
		this.db      = connect();
		this.shell   = null;
		this.options = {
			mode:          'json',
			pythonPath:    'python',
			pythonOptions: ['-u'],
			scriptPath:    'twitter-scraper/lib/modules',
			args:          ['value1', 'value2', 'value3']
		}
	}


	async getTrends() {
		return new Promise((resolve, reject) => {
			this.options.args = [];
			this.shell        = PythonShell.run('trends.py', this.options);
			this.shell.on('message', (message) => {
				resolve(message);
			});
			this.shell.end((err, code, signal) => {
				if (err) {
					logger.error(err);
					reject(err);
				}
				logger.info(`The exit code was: ${code}`);
				logger.info(`The exit signal was: ${signal}`);
			});
		});
	}


	async queryTrend(args) {
		return new Promise((resolve, reject) => {
			this.options.args = [args];
			this.shell        = PythonShell.run("trends.py", this.options);
			this.shell.on('message', (message) => {
				resolve(message);
			});
			this.shell.end((err, code, signal) => {
				if (err) {
					logger.error(err);
					reject(err);
				}
				logger.info(`The exit code was: ${code}`);
				logger.info(`The exit signal was: ${signal}`);
			});

		});
	}


	async updateTrends(trend) {}


	async deleteTrend(trendId) {}



}



module.exports = [TweetRepository, TrendRepository];
