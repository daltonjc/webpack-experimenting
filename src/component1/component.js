const logger1 = require('./logger1');
const logger2 = require('./logger2');

module.exports = () => {
    logger1();
    logger2();
};