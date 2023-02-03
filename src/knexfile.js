const path = require('path')
const { DB, NODE_ENV } = require('./config/app')

module.exports = {
  [NODE_ENV]: {
    client: DB[NODE_ENV].DB_CLIENT,
    connection: {
      host: DB[NODE_ENV].DB_HOST,
      port: DB[NODE_ENV].DB_PORT,
      user: DB[NODE_ENV].DB_USER,
      password: DB[NODE_ENV].DB_PASS,
      database: DB[NODE_ENV].DB_NAME,
    },
    debug: NODE_ENV !== 'production',
    migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, 'repository/postgres/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'repository/postgres/seeders'),
    }
  }
}
