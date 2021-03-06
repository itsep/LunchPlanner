const { AuthorizationError } = require('./authorization_error')
const { AuthenticationError } = require('./authentication_error')
const { InputValidationError } = require('./input_validation_error')
const { SQLError } = require('./sql_error')
const { UnknownError } = require('./unknown_error')
const { NeedsUserConfirmation } = require('./needs_user_confirmation')

const types = [
  AuthorizationError,
  AuthenticationError,
  InputValidationError,
  SQLError,
  UnknownError,
  NeedsUserConfirmation,
]
const identifierToTypeMap = {}
types.forEach((errorType) => {
  identifierToTypeMap[errorType.identifier] = errorType
})

module.exports = {
  types,
  identifierToTypeMap,
}
