import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import pumpingUnitImg from './../assets/images/kpkpumpingunit1.jpg'


const styles = theme => ({
  card: {
    maxWidth: 'auto',
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <Typography type="headline" component="h2" className={classes.title}>
          {/* KP Kauffman Co. */}
        </Typography>
        <CardMedia className={classes.media} image={pumpingUnitImg} title="KPK Pumping Unit" />
        <CardContent>
          {/* <Typography type="body1" component="p">
              Welcome to the KPK Field Ops Landing page. 
            </Typography> */}
        </CardContent>
      </Card>

    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
