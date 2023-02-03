const { HTTP, errorHandler } = require('../../utils');

/**
 *
 * @param request
 * @param reply
 */
exports.keepAlive = async (request, reply) => {
  reply.code(HTTP.OK).send('API is alive');
};

/**
 *
 * @param request
 * @param reply
 */
exports.ping = async (request, reply) => {
  try {
    reply.code(HTTP.OK).send({
      status: true,
      message: 'hello',
      data: {},
      kucong
    });
  } catch (error) {
    errorHandler({ request, reply, error })
  }
};

/**
 *
 * @param request
 * @param reply
 */
exports.getVersion = async (request, reply) => {
  reply.code(HTTP.OK).send({
    version: 1,
  });
};
