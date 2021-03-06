const languageKey = 'en'
const content = {
  productName: 'Lunchspace',
  myLunchspaces: 'My Lunchspaces',
  // Localizable Errors
  authenticationError: 'Not authenticated. Please login.',
  authorizationError: 'Not authorized. You do not have the rights to perform this action.',
  unexpectedDatabaseError: 'Unexpected database error. Please try again later.',
  unknownError: 'Unknown error. Please try again later.',
  unknownErrorWithMessage: 'Unexpected error: {message}',
  needsUserConfirmation: 'Please confirm this action.',
  invalidFileFormat: 'The format of your file is not supported. Please upload a .jpeg or .png file.',

  passwordAndEmailDoesNotMatch: 'Password does not match with e-mail {email}.',
  illegalInput: 'Upps, something went wrong. Please try again.',
  illegalLengthLocationName: 'The name of a location must be between 1 and 64 characters long.',
  illegalSubdomain: 'The given subdomain ({lunchspaceSubdomain}) contains illegal characters.',
  subdomainAlreadyExists: 'The given subdomain ({lunchspaceSubdomain}) is already in use.',
  fieldRequired: 'This field is required.',
  invalidEmail: 'Please enter a valid e-mail address.',
  illegalHyphen: 'A subdomain may not contain a leading or trailing hyphen(-).',
  invalidLength: 'Input must be between {minimumLength} and {maximumLength} characters long.',
  invalidToken: 'This invitation is no longer valid.',
  lunchspaceDoesNotExist: 'The requested Lunchspace does not exist.',
  emailAlreadyRegistered: 'An account with the e-mail {email} does already exists.',
  userAlreadyMember: 'You are already a member of this lunchspace.',

  // Imprint
  contact: 'Contact',
  section5Tmg: 'Information in accordance with Section 5 TMG',
  imprint: 'Imprint',
  legalDisclosure: 'Legal disclosure',

  joinLunchspaceTitle: 'Join Lunchspace',
  joinLunchspace: 'You got invited to {lunchspaceName}!',
  inviteToCurrentLunchspace: 'Invite to lunchspace {lunchspaceName}',
  invitationSent: 'Invitation sent.',
  notYou: 'Not you?',
  invalidInvitationLink: 'Invitation link is invalid',
  accept: 'Accept',
  needToLoginForInvite: 'Sign in or sign up to accept the invitation',
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
  leaveLunchspace: 'Leave Lunchspace',
  confirmDeleteLocation: 'There are events planned at this location in the future. Are you sure you want to delete it?',

  successfullyChangedName: 'Succesfully changed name.',
  successfullyChangedPassword: 'Succesfully changed password.',
  successfullyChangedPicture: 'Succesfully changed picture.',

  invite: 'Invite',
  email: 'Email',
  phone: 'Phone',
  support: 'Support',
  password: 'Password',
  name: 'Name',
  change: 'Change',
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
  someoneElseAndOneOtherJoinedMyEventBody: 'You {joinedUserFirstName} {joinedUserLastName} and one more joined {locationName} at {eventTime} from Lunchspace {lunchspaceName}.',
  someoneElseAndMultipleOtherJoinedMyEventBody: 'You {joinedUserFirstName} {joinedUserLastName} and {moreUserCount} more joined {locationName} at {eventTime} from Lunchspace {lunchspaceName}.',
  // all left my event
  allLeftMyEventTitle: 'Sorry, but all have left 😢',
  allLeftMyEventBody: 'All from Lunchspace {lunchspaceName} have left {locationName} at {eventTime}.',
  // new user created
  newUserSignedUpTitle: 'New User 🎉',
  newUserSignedUpBody: '{firstName} {lastName} signed up with email {email}.',
}
module.exports = {
  languageKey,
  content,
}
