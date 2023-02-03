const { logErrDetails } = require('./logger');
const { HTTP } = require('./constant')

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

module.exports.errorHandler = (options) => {
  const { request, reply, error } = options
  request.log.error(error);
  const result = reply.code(HTTP.BAD_REQUEST).send({
    status: false,
    message: error.toString(),
    data: {}
  });
  return result
}

module.exports.succesHandler = (options) => {
  const {
    request, reply, error, code
  } = options
  request.log.info(error);
  const result = reply.code(code).send({
    status: false,
    message: error.toString(),
    data: {}
  });
  return result
}
