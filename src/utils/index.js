const logger = require('./logger')
const exception = require('./exceptions')

module.exports = {
  ...logger,
  ...exception
}
