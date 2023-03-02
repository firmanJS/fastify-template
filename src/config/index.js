/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '../config');
const readFile = fs.readdirSync(directory)
const utils = readFile.map((r) => {
  const replaceFile = r.replace('.js', '')
  const req = require(`./${replaceFile}`)
  return req
})
module.exports = Object.assign({}, ...utils)
