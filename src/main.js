const fastify = require('fastify')({ logger: true });
const { APP_CONFIG, APP_NAME, NODE_ENV } = require('./config')
const { handlerExit, handleUncaughtErrors } = require('./utils');

const bootstrap = async () => {
  try {
    // error handler global
    handlerExit();
    handleUncaughtErrors();

    // Plugins
    // fastify.register(infoRoutesMiddleware);
    // fastify.register(v1RoutesMiddleware, { prefix: '/v1' });

    // Server
    fastify.listen(APP_CONFIG);
    fastify.log.info(
      '%s listening in %s environment',
      APP_NAME,
      NODE_ENV
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

bootstrap()
