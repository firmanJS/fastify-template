const fastify = require('fastify')({ logger: true });
const { handlerExit, handleUncaughtErrors } = require('./utils');
require('dotenv').config()

const bootstrap = async () => {
  try {
    // error handler global
    handlerExit();
    handleUncaughtErrors();

    // Plugins
    // fastify.register(infoRoutesMiddleware);
    // fastify.register(v1RoutesMiddleware, { prefix: '/v1' });

    // Server
    await fastify.listen({ port: process.env.APP_PORT });
    fastify.log.info(
      '%s listening in %s environment',
      process.env.APP_NAME,
      process.env.NODE_ENV
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

bootstrap()
