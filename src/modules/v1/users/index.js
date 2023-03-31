// const schema = require('./schemas/info-schema');
const handler = require('./users_handler');
const { responseSchema } = require('../../../config')

const info = {
  tags: ['Users'],
  summary: 'Users module'
}

exports.route = [
  {
    method: 'POST',
    url: '/users',
    handler: handler.store,
    schema: {
      ...info,
      body: {
        properties: {
          username: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' }
        }
      },
      response: responseSchema
    }
  },
  {
    method: 'GET',
    url: '/users',
    handler: handler.fetch,
    schema: {
      description: 'List',
      ...info,
      type: 'object',
      properties: {
        firstName: { type: 'string', example: 'Danish' },
        middleName: { type: 'string', example: 'Muhammad' },
        lastName: { type: 'string', example: 'Siddiq' },
        registrationNumber: { type: 'number', example: 1234567 }
      },
      required: ['firstName', 'lastName', 'registrationNumber']
    }
  },
  {
    method: 'GET',
    url: '/users/:id',
    handler: handler.fetchByParam,
    schema: {
      ...info,
    }
  }
];
