const fastify = require('fastify')({ logger: true });
const helmet = require('@fastify/helmet')
const swagger = require('@fastify/swagger')
const swaggerUi = require('@fastify/swagger-ui')
const {
  APP_CONFIG, APP_NAME, NODE_ENV, configSwagger
} = require('./config');
const { infoRoutesMiddleware } = require('./modules/health');
const { v1Routes } = require('./route/version_one');
const {
  handlerExit, handlerUncaughtErrors, handlerNotFound, DEV
} = require('./utils');

const bootstrap = async () => {
  try {
    if (NODE_ENV === DEV) {
      fastify.register(swagger, configSwagger)
      fastify.register(swaggerUi)
    }

    // error handler global
    handlerExit();
    handlerUncaughtErrors();

    // Register Plugins
    fastify.register(helmet)
    fastify.register(infoRoutesMiddleware);
    fastify.register(v1Routes, { prefix: '/v1' });
    fastify.setNotFoundHandler(handlerNotFound)
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
