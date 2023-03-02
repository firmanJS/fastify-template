// const schema = require('./schemas/info-schema');
const handler = require('./users_handler');

exports.route = [
  {
    method: 'GET',
    url: '/users',
    handler: handler.fetch
  },
  {
    method: 'GET',
    url: '/users/:id',
    handler: handler.fetchByParam
  }
];
