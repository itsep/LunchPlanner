const { LocalizableError } = require('./localizable_error')

class AuthorizationError extends LocalizableError {
  constructor(message) {
    super(message)
    this.name = AuthorizationError.name
    this.status = 403
    this.code = 'AUTHORIZATION_ERROR'
    this.localisationKey = 'AUTHORIZATION_ERROR'
  }
}

AuthorizationError.name = 'AuthorizationError'

module.exports = { AuthorizationError }
