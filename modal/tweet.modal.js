
const db = require('../database.js').db;


class Tweet {
    constructor(uid, username, created_at, media, media_url_https, likes, favoriites) {
        this.uid = uid;
        this.username = username;
        this.created_at = created_at;
        this.likes = likes;
        this.favoriites = favoriites;
        this.role = "tweets";
    }


}

module.exports = Tweet;
