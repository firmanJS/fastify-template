require('dotenv').config()

const { NODE_ENV } = process.env
module.exports = {
  LOL: 'lo',
  APP_NAME: process.env.APP_NAME,
  NODE_ENV,
  APP_CONFIG: { port: process.env.APP_PORT }
}
