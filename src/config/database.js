const knex = require('knex')

const knexfile = require('../knexfile')
const { NODE_ENV } = require('./app')

const env = NODE_ENV || 'development'
const configCore = knexfile[env]

module.exports = {
  PG: knex(configCore)
}
