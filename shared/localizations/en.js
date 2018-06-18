const languageKey = 'en'
const content = {
  productName: 'Lunchspace',
  myLunchspaces: 'My Lunchspaces',
  // Localizable Errors
  authenticationError: 'Not authenticated. Please login.',
  authorizationError: 'Not authorized. You do not have the rights to perform this action.',
  unexpectedDatabaseError: 'Unexpected Database error. Please try again later.',
  unknownError: 'Unknown error. Please try again later.',
  unknownErrorWithMessage: 'Unexpected error: {message}',
  needsUserConfirmation: 'Please confirm this action.',
  invalidFileFormat: 'The format of your file is not supported. Please upload a .jpeg or .png file.',

  passwordAndEmailDoesNotMatch: 'Password does not match with email {email}.',
  illegalInput: 'Upps, something went wrong. Please try again.',
  illegalLengthLocationName: 'The name of a location must be between 1 and 64 characters long.',
  illegalSubdomain: 'The given subdomain ({lunchspaceSubdomain}) contains illegal characters.',
  subdomainAlreadyExists: 'The given Subdomain ({lunchspaceSubdomain}) is already in use.',
  fieldRequired: 'This field is required.',
  invalidEmail: 'Please enter a valid email address.',
  illegalHyphen: 'A subdomain may not contain a leading or trailing hyphen(-).',
  invalidLength: 'Input must be between {minimumLength} and {maximumLength} characters long.',
  invalidToken: 'This invitation is no longer valid.',
  lunchspaceDoesNotExist: 'The requested Lunchspace does not exist.',
  emailAlreadyRegistered: 'An account with the email {email} does already exists.',
  userAlreadyMember: 'You are already a member of this lunchspace.',

  imprint: 'Imprint',

  joinLunchspaceTitle: 'Join Lunchspace',
  joinLunchspace: 'You got invited to {lunchspaceName}!',
  inviteToCurrentLunchspace: 'Invite to lunchspace {lunchspaceName}',
  invitationSent: 'Invitation sent.',
  notYou: 'Not you?',
  invalidInvitationLink: 'Invitation link is invalid',
  accept: 'Accept',
  needToLoginForInvite: 'Sign In or Sign Up to accept the invitation',
  askForPushNotificatoinSubscription: 'Do you want notifications from this Lunchspace, even when you are not on this page?',
  yes: 'Yes',
  notNow: 'Not now',
  InvitationSubject: 'Invitation to Lunchspace',
  InvitationTitle: 'You have been invited!',
  InvitationPart1: ' has invited you to join ',
  InvitationPart2: '. Click on this link to join:',

  newPicture: 'New picture',
  noPictureSelected: 'No picture selected',

  createLunchspace: 'Create Lunchspace',
  lunchspaceSuccessfulCreated: 'Lunchspace {lunchspaceName} successfull created.',
  createLocation: 'Create Location',

  successfullyChangedName: 'Succesfully changed name.',
  successfullyChangedPassword: 'Succesfully changed password.',
  successfullyChangedPicture: 'Succesfully changed picture.',

  invite: 'Invite',
  email: 'Email',
  password: 'Password',
  name: 'Name',
  change: 'change',
  changePassword: 'change password',
  delete: 'Delete',
  profile: 'Profile',
  login: 'Login',
  logout: 'Logout',
  today: 'Today',
  signUp: 'Sign Up',
  cancel: 'Cancel',
  participants: 'Participants',
  close: 'Close',

  // Notifications
  // Someone else joined my event
  someoneElseJoinedMyEventTitle: '{joinedUserFirstName} joined {locationName} at {eventTime}',
  someoneElseJoinedMyEventBody: 'You and {joinedUserFirstName} {joinedUserLastName} joined {locationName} at {eventTime} from Lunchspace {lunchspaceName}.',
  someoneElseAndOneOtherJoinedMyEventBody: 'You, {joinedUserFirstName} {joinedUserLastName} and one more joined {locationName} at {eventTime} from Lunchspace {lunchspaceName}.',
  someoneElseAndMultipleOtherJoinedMyEventBody: 'You, {joinedUserFirstName} {joinedUserLastName} and {moreUserCount} more joined {locationName} at {eventTime} from Lunchspace {lunchspaceName}.',
  // all left my event
  allLeftMyEventTitle: 'Sorry, but all have left 😢',
  allLeftMyEventBody: 'All from Lunchspace {lunchspaceName} have left {locationName} at {eventTime}.',
}
module.exports = {
  languageKey,
  content,
}
