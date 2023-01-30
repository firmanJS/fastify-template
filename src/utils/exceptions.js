const { logErrDetails } = require('./logger');

/**
 *
 * @param err
 */
function errorHandler(err) {
  logErrDetails({ error: err, message: 'Error occurred in student-api-boilerplate' });
}

module.exports.handleUncaughtErrors = () => {
  process.on('unhandledRejection', errorHandler);
  process.on('uncaughtException', errorHandler);
};

module.exports.handlerExit = () => {
  process.on('SIGINT', () => {
    process.exit(0);
  });

  process.on('exit', () => {
    process.exit(0);
  });
};
