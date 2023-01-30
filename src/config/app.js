require('dotenv').config()

module.exports = {
  APP_NAME: process.env.APP_NAME,
  NODE_ENV: process.env.NODE_ENV,
  APP_CONFIG: { port: process.env.APP_PORT }
}
