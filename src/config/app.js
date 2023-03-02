require('dotenv').config()

module.exports = {
  APP_NAME: process?.env?.APP_NAME,
  APP_LANGUAGE: process?.env?.LANGUAGE,
  NODE_ENV: process?.env?.NODE_ENV,
  APP_CONFIG: { port: process?.env?.APP_PORT },
  TZ: process?.env?.TZ ?? 'Asia/Jakarta'
}
