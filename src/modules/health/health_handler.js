const { HTTP, baseResponse, fullDateFormatIndo } = require('../../utils');
const { APP_NAME } = require('../../config');

const getDurationInMilliseconds = (start = process.hrtime()) => {
  const NS_PER_SEC = 1e9
  const NS_TO_MS = 1e6
  const diff = process.hrtime(start)

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}
/**
 *
 * @param request
 * @param reply
 * @return {void}
 */
exports.isAlive = async (request, reply) => baseResponse(reply, {
  code: HTTP.OK,
  data: {
    status: true,
    message: 'is allive',
    data: {
      response_time: `${getDurationInMilliseconds()}(ms)`,
      welcome: APP_NAME,
      uptimes: process.uptime(),
      timestamp: fullDateFormatIndo(new Date().toISOString()),
      documentation: `http://${request.hostname}/documentation`
    }
  }
});

/**
 *
 * @param request
 * @param reply
 * @return {void}
 */
exports.ping = async (request, reply) => baseResponse(reply, {
  code: HTTP.OK,
  data: {
    status: true,
    message: `pong ${new Date().toISOString()}`,
    data: []
  }
});
