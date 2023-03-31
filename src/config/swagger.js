module.exports = {
  configSwagger: {
    swagger: {
      info: {
        title: 'Fastify Template',
        description: 'Fastify Documentation api using swagger open api',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      },
      // definitions: {
      //   User: {
      //     type: 'object',
      //     required: ['id', 'email'],
      //     properties: {
      //       id: { type: 'string', format: 'uuid' },
      //       firstName: { type: 'string' },
      //       lastName: { type: 'string' },
      //       email: { type: 'string', format: 'email' }
      //     }
      //   }
      // },
    }
  }
}
