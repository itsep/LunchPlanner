import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'

const styles = () => ({
  timeStamp: {
    height: '70pt',
    width: '70pt',
    flexShrink: 0,
    marginLeft: '5pt',
    marginRight: '5pt',
    marginTop: '25pt',
    marginBottom: '25pt',
  },
})

function TimeStamp({ timeStamp, classes }) {
  const { hour } = timeStamp
  const minute = timeStamp.minute === 0 ? '00' : timeStamp.minute
  return (
    <Button variant="fab" className={classes.timeStamp}>
      <Typography variant="body1" gutterBottom align="center" >
        {hour}:{minute}
      </Typography>
    </Button>
  )
}

TimeStamp.propTypes = {
  timeStamp: PropTypes.shape({
    key: PropTypes.number.isRequired,
    hour: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired,
    userIDs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired),
  }).isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TimeStamp)
