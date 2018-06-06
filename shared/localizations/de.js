const languageKey = 'de'
const content = {
  productName: 'Lunchspace',
  // Localizable Errors
  authenticationError: 'Nicht authentifiziert. Bitte melde dich an.',
  authorizationError: 'Nicht authorisiert. Du hast nicht genug Rechte für diese Aktion.',
  unexpectedDatabaseError: 'Unerwarteter Datenbankfehler. Bitte versuche es später erneut.',
  unknownError: 'Ein unbekannter Fehler ist aufgetreten. Bitte versuche es später erneut.',
  unknownErrorWithMessage: 'Ein unerwartet Fehler ist aufgetrete: {message}',

  passwordAndEmailDoesNotMatch: 'Passwort und Email {email} stimmen nicht überein.',
  illegalInput: 'Upps, es ist ein Fehler aufgetreten. Bitte versuche es erneut.',
  illegalLengthLocationName: 'Der Name einer Location muss zwischen 1 and 64 Zeichen lang sein.',
  illegalSubdomain: 'Die angegebene Subdomain ({lunchspaceSubdomain}) enthält ungültige Zeichen.',
  subdomainAlreadyExists: 'Die angegebene Subdomain ({lunchspaceSubdomain}) ist bereits vergeben.',
  fieldRequired: 'Eingabe notwendig.',
  invalidEmail: 'Bitte geben sie eine gültige E-Mail-Adresse an.',
  illegalHyphen: '(-) darf weder am Anfang noch am Ende der Sudomain stehen.',
  inputTooLong24: 'maximal 24 Zeichen',

  createLunchspace: 'Lunchspace erstellen',
  createLocation: 'Location erstellen',
  login: 'Anmelden',
  today: 'Heute',
  signUp: 'Registrieren',
}
module.exports = {
  languageKey,
  content,
}
