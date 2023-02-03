const path = require('path')
const { DB } = require('./config/app')

module.exports = {
  development: {
    client: DB.DEV.DB_CLIENT,
    connection: {
      host: DB.DEV.DB_HOST,
      port: DB.DEV.DB_PORT,
      user: DB.DEV.DB_USER,
      password: DB.DEV.DB_PASS,
      database: DB.DEV.DB_NAME,
    },
    debug: true,
    migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, 'repository/postgres/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'repository/postgres/seeders'),
    }
  },
  production: {
    client: DB.PROD.DB_CLIENT,
    connection: {
      host: DB.PROD.DB_HOST,
      port: DB.PROD.DB_PORT,
      user: DB.PROD.DB_USER,
      password: DB.PROD.DB_PASS,
      database: DB.PROD.DB_NAME,
    },
    debug: process.env.NODE_ENV !== 'production',
    migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, 'repository/postgres/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'repository/postgres/seeders'),
    }
  },
  staging: {
    client: DB.STG.DB_CLIENT,
    connection: {
      host: DB.STG.DB_HOST,
      port: DB.STG.DB_PORT,
      user: DB.STG.DB_USER,
      password: DB.STG.DB_PASS,
      database: DB.STG.DB_NAME,
    },
    debug: true,
    migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, 'repository/postgres/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'repository/postgres/seeders'),
    }
  }
}
