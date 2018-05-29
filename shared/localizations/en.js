const languageKey = 'en'
const content = {
  test: 'test',
  welcome: 'Hello {name}',
  welcome2: 'Hello {firstName} {lastName}',
  // Localizable Errors
  authenticationError: 'Not authenticated. Please login.',
  authorizationError: 'Not authorized. You do not have the rights to perform this action.',
  unexpectedDatabaseError: 'Unexpected Database error. Please try again later.',

  passwordAndEmailDoesNotMatch: 'Password does not match with email {email}.',
  illegalInput: 'Upps, something went wrong. Please try again.',
  illegalLengthLocationName: 'The name of a location must be between 1 and 64 characters long.',
  illegalSubdomain: 'The given subdomain ({lunchspaceSubdomain}) contains illegal characters.',
  subdomainAlreadyExists: 'The given Subdomain ({lunchspaceSubdomain}) is already in use.',
  fieldRequired: 'This field is required.',
  invalidEmail: 'Please enter a valid email address.',
  illegalHyphen: 'A subdomain may not contain a leading or trailing hyphen(-).',
  inputTooLong24: 'max 24 characters',

  createLunchspace: 'Create Lunchspace',
  createLocation: 'Create Location',
  login: 'Login',
  today: 'Today',
  signUp: 'Sign Up',
}
module.exports = {
  languageKey,
  content,
}