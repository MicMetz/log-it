const {connect} = require('../config/db.config');
let {PythonShell} = require('python-shell')
const logger = require('../logger/api.logger');


class TweetRepository {
    constructor() {
        this.db = connect();
        this.shell = null;
        this.options = {
            mode         : 'text',
            pythonPath   : '/usr/local/bin/python',
            pythonOptions: ['-u'],
            scriptPath   : '../twitter-scraper/lib/modules',
            args         : []
        };
    }


    /*   */
    async getTweets() {
        return new Promise((resolve, reject) => {
            console.log("Calling Python Script: tweets.py");
            this.options.args = [];
            console.log("Args: None");

            PythonShell.run("tweets.py", this.options, (err) => {
                if (err) throw err;
                console.log('finished');
            });

            console.log("Python Script: tweets.py - Complete");
        });
    }


    async queryTweet(args) {
        return new Promise((resolve, reject) => {
            console.log("Calling Python Script: tweets.py");
            this.options.args = [args];
            console.log("Args: " + this.options.args);
            this.shell = PythonShell.run("../twitter-scraper/tweets.py", this.options);
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
    constructor() {
        this.db = connect();
        this.shell = null;
        this.options = {
            mode         : 'text',
            pythonPath   : '/usr/local/bin/python',
            pythonOptions: ['-u'],
            scriptPath   : '../twitter-scraper/lib/modules',
            args         : []
        };
    }


    async getTrends() {
        return new Promise((resolve, reject) => {
            console.log("Calling Python Script: trends.py");
            this.options.args = [];
            console.log("Args: None");
            PythonShell.run("../twitter-scraper/trends.py", this.options, (err) => {
                if (err) throw err;
                console.log('finished');
            });

            console.log("Python Script: trends.py - Complete");

        });
    }


    async queryTrend(args) {
        return new Promise((resolve, reject) => {
            console.log("Calling Python Script: trends.py");
            this.options.args = [args];
            console.log("Args: " + this.options.args);
            this.shell = PythonShell.run("../twitter-scraper/trends.py", this.options);
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
            console.log("Script Finished");
        });
    }


    async updateTrends(trend) {}


    async deleteTrend(trendId) {}


}


module.exports = [TweetRepository, TrendRepository];
