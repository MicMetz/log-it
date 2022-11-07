const db = require('../database.js').db;


class User {
    constructor(uid, username, tweets, pfp, bgp, bio, followers, following) {
        this.uid = uid;
        this.username = username;
        this.tweets = tweets;
        this.pfp = pfp;
        this.bgp = bgp;
        this.bio = bio;
        this.followers = followers;
        this.following = following;
        this.status = 'unknown';
        this.role = "users";
    }

}

module.exports = User;
