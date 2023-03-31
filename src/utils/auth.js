const crypto = require('crypto')

exports.generatePassword = (payload) => {
  try {
    payload.salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(payload.password, payload.salt, 10000, 100, 'sha512').toString('hex')
    payload.password = hash
    return payload
  } catch (error) {
    console.info('error generated password', error)
    return payload
  }
}

exports.isValidPassword = (password, hash, salt) => {
  try {
    const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 100, 'sha512').toString('hex')
    return hash === hashPassword
  } catch (error) {
    console.info('error validated password', error)
    return false
  }
}
