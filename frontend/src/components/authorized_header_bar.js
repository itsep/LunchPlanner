import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Hidden from 'material-ui/Hidden'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import UserAvatar from './user_avatar'
import localizedStrings from '../localization'

const styles = theme => ({
  title: {
    flex: 1,
  },
  avatar: {
    width: '48px',
    height: '48px',
  },
  userName: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

class CommonAppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.openMenu = this.openMenu.bind(this)
    this.handleMenuClose = this.handleMenuClose.bind(this)
    this.state = {}
  }
  openMenu(event) {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose() {
    this.setState({ anchorEl: null })
  }
  render() {
    const {
      classes, user, lunchspace, logout,
    } = this.props
    const { anchorEl } = this.state
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.title}>
            {lunchspace.name}
          </Typography>

          <Hidden xsDown implementation="css">
            <Typography variant="title" color="inherit" className={classes.userName}>
              {user.firstName} {user.lastName}
            </Typography>
          </Hidden>

          <IconButton onClick={this.openMenu}>
            <UserAvatar
              user={user}
              className={classes.avatar}
            />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={logout}>
              {localizedStrings.logout}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}
CommonAppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  lunchspace: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default withStyles(styles)(CommonAppContainer)