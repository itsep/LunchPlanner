const languageKey = 'de'
const content = {
  productName: 'Lunchspace',
  myLunchspaces: 'Meine Lunchspaces',
  // Localizable Errors
  authenticationError: 'Nicht authentifiziert. Bitte melde dich an.',
  authorizationError: 'Nicht authorisiert. Du hast nicht genug Rechte für diese Aktion.',
  unexpectedDatabaseError: 'Unerwarteter Datenbankfehler. Bitte versuche es später erneut.',
  unknownError: 'Ein unbekannter Fehler ist aufgetreten. Bitte versuche es später erneut.',
  unknownErrorWithMessage: 'Ein unerwartet Fehler ist aufgetrete: {message}',
  needsUserConfirmation: 'Bitte bestätigen sie diese Aktion.',

  passwordAndEmailDoesNotMatch: 'Passwort und Email {email} stimmen nicht überein.',
  illegalInput: 'Upps, es ist ein Fehler aufgetreten. Bitte versuche es erneut.',
  illegalLengthLocationName: 'Der Name einer Location muss zwischen 1 and 64 Zeichen lang sein.',
  illegalSubdomain: 'Die angegebene Subdomain ({lunchspaceSubdomain}) enthält ungültige Zeichen.',
  subdomainAlreadyExists: 'Die angegebene Subdomain ({lunchspaceSubdomain}) ist bereits vergeben.',
  fieldRequired: 'Eingabe notwendig.',
  invalidEmail: 'Bitte geben sie eine gültige E-Mail-Adresse an.',
  illegalHyphen: '(-) darf weder am Anfang noch am Ende der Sudomain stehen.',
  invalidLength: 'Eingabe muss zwischen {minimumLength} und {maximumLength} Zeichen lang sein.',
  invalidToken: 'Die verwendete Einladung ist nicht mehr gültig.',
  lunchspaceDoesNotExist: 'Der angeforderte Lunchspace existiert nicht.',
  emailAlreadyRegistered: 'Ein Account mit der Email {email} existiert bereits.',
  userAlreadyMember: 'Du bist bereits Mitglied in diesem Lunchspace.',

  joinLunchspaceTitle: 'Lunchspace beitreten',
  joinLunchspace: 'Du wurdest zum {lunchspaceName} eingeladen!',
  inviteToCurrentLunchspace: 'Einladen zum Lunchspace {lunchspaceName}',
  invitationSent: 'Einladung gesendet.',
  notYou: 'Nicht du?',
  invalidInvitationLink: 'Einladungs Link ist ungültig',
  accept: 'Akzeptieren',
  needToLoginForInvite: 'Melde dich an oder erstelle einen Account um die Einladung an zu nehmen.',
  askForPushNotificatoinSubscription: 'Möchtest du außerhalb der Seite Benachrichtigungen zu diesem Lunchspace erhalten?',
  yes: 'Ja',
  notNow: 'Nicht jetzt',

  createLunchspace: 'Lunchspace erstellen',
  lunchspaceSuccessfulCreated: 'Lunchspace {lunchspaceName} erfolgreich erstellt.',
  createLocation: 'Location erstellen',
  invite: 'Einladen',
  delete: 'Löschen',
  login: 'Anmelden',
  logout: 'Abmelden',
  today: 'Heute',
  signUp: 'Registrieren',
  cancel: 'Abbrechen',
  participants: 'Teilnehmer',
  close: 'Schließen',
}
module.exports = {
  languageKey,
  content,
}
