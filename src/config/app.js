require('dotenv').config()

module.exports = {
  APP_NAME: process.env.APP_NAME,
  NODE_ENV: process.env.NODE_ENV,
  APP_CONFIG: { port: process.env.APP_PORT },
  DB: {
    development: {
      DB_CLIENT: process.env.DB_CLIENT_DEV,
      DB_HOST: process.env.DB_HOST_DEV,
      DB_PORT: process.env.DB_PORT_DEV,
      DB_USER: process.env.DB_USER_DEV,
      DB_PASS: process.env.DB_PASS_DEV,
      DB_NAME: process.env.DB_NAME_DEV,
    },
    production: {
      DB_CLIENT: process.env.DB_CLIENT_STG,
      DB_HOST: process.env.DB_HOST_STG,
      DB_PORT: process.env.DB_PORT_STG,
      DB_USER: process.env.DB_USER_STG,
      DB_PASS: process.env.DB_PASS_STG,
      DB_NAME: process.env.DB_NAME_STG,
    },
    staging: {
      DB_CLIENT: process.env.DB_CLIENT_PROD,
      DB_HOST: process.env.DB_HOST_PROD,
      DB_PORT: process.env.DB_PORT_PROD,
      DB_USER: process.env.DB_USER_PROD,
      DB_PASS: process.env.DB_PASS_PROD,
      DB_NAME: process.env.DB_NAME_PROD,
    }
  }
}
