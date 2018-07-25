import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import { list } from './api-wellstatus.js'
// import Avatar from 'material-ui/Avatar'
// import IconButton from 'material-ui/IconButton'
// import Person from 'material-ui-icons/Person'
// import SelectAll from 'material-ui-icons/SelectAll'
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableHead from 'material-ui/Table/TableHead';
import TableRow from 'material-ui/Table/TableRow';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing.unit,
        margin: theme.spacing.unit * 5
    }),
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
        color: theme.palette.openTitle
    },
    backspace: {
        margin: theme.spacing.unit * 1
    },
      table: {
        minWidth: 700
      },
      row: {
        '&:nth-of-type(odd)': {
          backgroundColor: 'theme.palette.background.black',
          hover: {
            background: '#0000FF'}
        },
      },
})

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#2196f3',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  

class Wellstatuses extends Component {
    state = {
        wellstatuses: []
    }

    componentDidMount() {
        list().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({ wellstatuses: data })
            }
        })
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography variant="display1"  className={classes.title}>
                    Submitted Well Status Forms
                 </Typography>
                 <hr></hr><br></br>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.row}>
                            <CustomTableCell>Well Name</CustomTableCell>
                            <CustomTableCell>Well Status</CustomTableCell>
                            <CustomTableCell>Comments</CustomTableCell>
                            <CustomTableCell>Date Submitted</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.wellstatuses.map((item, i) => 
                        <TableRow> 
                            <CustomTableCell><Link to={"/wellstatus/" + item._id} key={i} button key={item._id}>{item.well}</Link></CustomTableCell>
                            <CustomTableCell>{item.status}</CustomTableCell>
                            <CustomTableCell>{item.comments}</CustomTableCell>
                            <CustomTableCell>{item.date}</CustomTableCell>
                        </TableRow>                        
                    )
                    }
                    </TableBody>
                </Table>
                 
            </Paper>
        )
    }
}

Wellstatuses.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Wellstatuses)

/*

<List dense>
                    {this.state.wellstatuses.map((item, i) => {
                        return <Link to={"/wellstatus/" + item._id} key={i}>
                            <ListItem button key={item._id}>
                                <ListItemAvatar>
                                    <Avatar >
                                        <SelectAll />
                                    </Avatar>
                                </ListItemAvatar>
                                <Link className={classes.backspace} to={"/wellstatus/" + item._id}>
                                    <strong>
                                        {item.well} || Well Status: {item.status}
                                    </strong>
                                </Link>
                            </ListItem>
                        </Link>
                    })
                    }
                </List> 

*/