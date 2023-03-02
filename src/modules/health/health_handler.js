const { HTTP, errorHandler, succesHandler } = require('../../utils');

/**
 *
 * @param request
 * @param reply
 * @return {void}
 */
exports.keepAlive = async (request, reply) => {
  reply.code(HTTP.OK).send('API is alive');
};

/**
 *
 * @param request
 * @param reply
 * @return {void}
 */
exports.ping = async (request, reply) => {
  try {
    return succesHandler({
      reply, message: 'hello', data: []
    })
  } catch (error) {
    return errorHandler({ request, reply, error })
  }
};

/**
 *
 * @param request
 * @param reply
 * @return {void}
 */
exports.getVersion = async (request, reply) => {
  reply.code(HTTP.OK).send({
    version: 1,
  });
};
