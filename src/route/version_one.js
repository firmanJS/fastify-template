/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs')
const path = require('path')
/**
 *
 * @param fastify
 * @param opts
 * @param next
 */
const v1Routes = (fastify, opts, next) => {
  const directory = path.join(__dirname, '../modules/v1')
  // // s
  // fastify.use(guard)
  const readFile = fs.readdirSync(directory)
  readFile.map((files) => {
    const routes = require(`../modules/v1/${files}`)
    routes.route.map((route) => fastify.route(route));
    return routes
  })

  next()
}

module.exports = { v1Routes }
