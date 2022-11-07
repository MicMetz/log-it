
const db = require('../database.js').db;


class User {
    constructor(uid, username, tweets) {
        this.uid = uid;
        this.username = username;
        this.tweets = tweets;
        this.role = "users";
    }

}

module.exports = User;
