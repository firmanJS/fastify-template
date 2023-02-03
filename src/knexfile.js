const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const { NODE_ENV } = process.env
const upper = NODE_ENV?.toUpperCase()
const DB = {
  [process.env.NODE_ENV]: {
    DB_CLIENT: process.env[`DB_CLIENT_${upper}`],
    DB_HOST: process.env[`DB_HOST_${upper}`],
    DB_PORT: process.env[`DB_PORT_${upper}`],
    DB_USER: process.env[`DB_USER_${upper}`],
    DB_PASS: process.env[`DB_PASS_${upper}`],
    DB_NAME: process.env[`DB_NAME_${upper}`],
  }
}
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
      directory: path.join(__dirname, 'models/postgre/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'models/postgre/seeders'),
    }
  }
}
