// const schema = require('./schemas/info-schema');
const handler = require('./health_handler');

const infoRoutesMiddleware = (fastify, opts, next) => {
  const routes = [
    {
      method: 'GET',
      url: '/',
      schema: {
        description: 'Get the status of the API',
        tags: ['Info'],
        summary: 'Obtain the status of the API',
        // response: {
        //   [HttpStatus.OK]: {
        //     description: 'Successful response',
        //     type: 'string'
        //   },
        //   [HttpStatus.BAD_REQUEST]: notFoundSchema,
        //   [HttpStatus.INTERNAL_SERVER_ERROR]: errorSchema
        // }
      },
      handler: handler.isAlive
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
    }
  ];
  routes.map((route) => fastify.route(route));
  next();
};
/**
 * Info routes endpoints
 */
module.exports = { infoRoutesMiddleware };
