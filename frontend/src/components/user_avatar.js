import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import combineStyleClasses from 'lib/combineStyleClassses'

function firstLetterOf(potentialString) {
  if (typeof potentialString !== 'string') {
    return ''
  }
  return potentialString.charAt(0)
}

function initialsOf(user) {
  const { firstName, lastName } = user
  return firstLetterOf(firstName) + firstLetterOf(lastName)
}

const styles = theme => ({
  container: {
    position: 'relative',
    flexShrink: 0,
    borderRadius: '100%',
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
})

function UserAvatar({
  classes, user, children, className = '',
}) {
  return (
    <div className={combineStyleClasses(classes.container, className)}>
      { user.imageUrl &&
        <img
          src={user.imageUrl}
          alt={`${user.firstName} ${user.lastName}`}
          className={classes.image}
          onLoad={(e) => { e.target.style.display = '' }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      }
      {children}
      <span className={classes.initials}>{initialsOf(user)}</span>
    </div>
  )
}

UserAvatar.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.object,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}
UserAvatar.defaultProps = {
  children: (<div />),
}

UserAvatar.defaultProps = {
  className: '',
}

export default withStyles(styles)(UserAvatar)
