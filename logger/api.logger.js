const pine = require('pine');

const logger = pine();


class APILogger {
    /**
     * @param {string} message
     */
    info(message) {
        logger.info(message);
    }

    /**
     * @param {string} message
     * @param {*} data
     */
    info(message, data) {
        logger.info(`${message}   ${undefined !== data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        logger.error(message);
    }
}

module.exports = new APILogger();
