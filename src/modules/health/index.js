// const schema = require('./schemas/info-schema');
const handler = require('./health_handler');

const infoRoutesMiddleware = (fastify, opts, next) => {
  const routes = [
    {
      method: 'GET',
      url: '/keep-alive',
      // schema: schema.keepAlive,
      handler: handler.keepAlive
    },
    {
      method: 'GET',
      url: '/ping',
      // schema: {
      //   description: 'Get the status of the API',
      //   tags: ['Info'],
      //   summary: 'Obtain the status of the API',
      //   response: {
      //     200: {
      //       description: 'Successful response',
      //       type: 'string',
      //       properties: {}
      //     },
      //     400: {
      //       description: 'Not Found response',
      //       type: 'object',
      //       properties: {
      //         error: { type: 'string' },
      //         message: { type: 'string' },
      //         data: { type: 'string' }
      //       }
      //     },
      //     500: {
      //       description: 'Error response',
      //       type: 'object',
      //       properties: {
      //         error: { type: 'string' },
      //         message: { type: 'string' },
      //         statusCode: { type: 'number' }
      //       }
      //     }
      //   }
      // },
      handler: handler.ping
    },
    {
      method: 'GET',
      url: '/version',
      // schema: schema.version,
      handler: handler.getVersion
    }
  ];
  routes.map((route) => fastify.route(route));
  next();
};
/**
 * Info routes endpoints
 */
module.exports = { infoRoutesMiddleware };
