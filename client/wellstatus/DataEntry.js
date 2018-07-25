import React, { Component } from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { create } from './api-wellstatus.js'
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog'
// import { Link } from 'react-router-dom'
import MenuItem from  'material-ui/menu/MenuItem'

const styles = theme => ({
    card: {
        maxWidth: 1000,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600
    },
    menu: {
        width: 200,
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
})

const statuses = [
    {
        value: 'UsrEr',
        label: '**Select Status**'
    },
    {
        value: 'WatN',
        label: '100% Water - (No Gas)'
    },
    {
        value: 'Water',
        label: '100% Water - (Sells Gas)'
    },
    {
        value: 'BearN',
        label: 'Bad Bearings - (No Gas)'
    },
    {
        value: 'Beari',
        label: 'Bad Bearings - (Sells Gas)'
    },
    {
        value: 'BeltN',
        label: 'Bad Belts - (No Gas)'
    },
    {
        value: 'Belts',
        label: 'Bad Belts - (Sells Gas)'
    },
    {
        value: 'ClkN',
        label: 'Bad Clock - (No Gas)'
    },
    {
        value: 'Clk',
        label: 'Bad Clock - (Sells Gas)'
    },
    {
        value: 'Meter',
        label: 'Bad Meter - (Sells Gas)'
    },
    {
        value: 'MotrN',
        label: 'Bad/No Motor - (No Gas)'
    },
    {
        value: 'Motor',
        label: 'Bad/No Motor - (Sells Gas)'
    },
    {
        value: 'COMP',
        label: 'Completion'
    },
    {
        value: 'DRL',
        label: 'Drilling'
    },
    {
        value: 'FlowN',
        label: 'Flowline Leak - (No Gas)'
    },
    {
        value: 'FlowL',
        label: 'Flowline Leak - (Sells Gas)'
    },
    {
        value: 'FrcFB',
        label: 'Frac Flowback'
    },
    {
        value: 'LndON',
        label: 'Land Owner Issue - (No Gas)'
    },
    {
        value: 'LndOw',
        label: 'Land Owner Issue - (Sells Gas)'
    },
    {
        value: 'LegOu',
        label: 'Leg Out (Power Problem) (Sells Gas)'
    },
    {
        value: 'PmpN',
        label: 'Needs Pumping Unit - (No Gas)'
    },
    {
        value: 'Pmp',
        label: 'Needs Pumping Unit - (Sells Gas)'
    },
    {
        value: 'NSale',
        label: 'No Sales Line - (No Gas)'
    },
    {
        value: 'ParaN',
        label: 'Parafin Problems - (No Gas)'
    },
    {
        value: 'Paraf',
        label: 'Parafin Problems - (Sells Gas)'
    },
    {
        value: 'PtRdN',
        label: 'Parted Rods - (No Gas)'
    },
    {
        value: 'PtRod',
        label: 'Parted Rods - (Sells Gas)'
    },
    {
        value: 'P&amp;A', 
        label: 'Plugged &amp; Abandoned'
    },
    { 
        value: 'PlgFl', 
        label: 'Plugged Flowline'
    },
    { 
        value: 'PmpRN', 
        label: 'Pmp Unit Needs Reset - (No Gas)'
    },
    { 
        value: 'RmpRN', 
        label: 'Pmp Unit Needs Reset - (No Gas)'
    },
    { 
        value: 'PmpR', 
        label: 'Pmp Unit Needs Reset - (Sells Gas)'
    },
    { 
        value: 'PmpM', 
        label: 'Pmping Unit Misc Pblm - (Sells Gas)'
    },
    { 
        value: 'PmpMN', 
        label: 'Pmping Unit Misc Problem - (No Gas)'
    },
    { 
        value: 'CsgLN', 
        label: 'Poss. Casing Leak - (No Gas)'
    },
    { 
        value: 'CsgLk', 
        label: 'Poss. Casing Leak - (Sells Gas)'
    },
    { 
        value: 'Frac', 
        label: 'Prep for Frac'
    },
    { 
        value: 'PFlow', 
        label: 'Prod - Flowing Well/Gas Lift'
    },
    { 
        value: 'PROD', 
        label: 'Producer'
    },
    { 
        value: 'PmpCN', 
        label: 'Pump Change - (No Gas)'
    },
    { 
        value: 'PmpCh', 
        label: 'Pump Change - (Sells Gas)'
    },
    { 
        value: 'PmpSN', 
        label: 'Pump Stuck - (No Gas)'
    },
    { 
        value: 'PmpSt', 
        label: 'Pump Stuck - (Sells Gas)'
    },
    { 
        value: 'PUgeN', 
        label: 'Pumping Unit Gear Box - (No Gas)'
    },
    { 
        value: 'PUgea', 
        label: 'Pumping Unit Gear Box - (Sells Gas)'
    },
    { 
        value: 'Separ', 
        label: 'Separator/Treator Problem'
    },
    { 
        value: 'SInon', 
        label: 'Shut In for Other Operator'
    },
    { 
        value: 'SI', 
        label: 'Shut-In'
    },
    { 
        value: 'sld', 
        label: 'Sold'
    },
    { 
        value: 'StacN', 
        label: 'Stacked - (No Gas)'
    },
    { 
        value: 'Stack', 
        label: 'Stacked - (Sells Gas)'
    },
    { 
        value: 'TA', 
        label: 'Temporarily Abandoned'
    },
    { 
        value: 'TLN', 
        label: 'Tubing Leak - (No Gas)'
    },
    { 
        value: 'TL', 
        label: 'Tubing Leak - (Sells Gas)'
    },
    { 
        value: 'TPart', 
        label: 'Tubing Parted (No Gas)'
    },
    { 
        value: 'Unk', 
        label: 'Unknown'
    },
    { 
        value: 'W/O',
        label: 'Workover',
    }
];


class DataEntry extends Component {
    state = {
        well: '',
        status: '',
        comments: '',
        open: false,
        error: ''
    }

    componentDidMount = () => {
        this.wellstatus = new FormData()
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    handleRequestClose = () => {
        this.setState({ open: false });
        this.setState({ 'well': '', 'status': '', 'comments': '', open: false, 'error': '' })
    }


    clickSubmit = () => {
        const wellstatus = {
            well: this.state.well || undefined,
            status: this.state.status || undefined,
            comments: this.state.comments || undefined
        }
        create(wellstatus).then((data) => {
            if (data.error) {
                this.setState({ error: data.error })
            } else {
                this.setState({ error: '', open: true })
            }
        })
    }
    render() {
        const { classes } = this.props
        return (<div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="display1" className={classes.title}>
                        Well Status Admin Form
                     </Typography>
                    <hr></hr><br></br>
                    <Typography type="title" className={classes.title}>
                        Please Complete the Following fields:
                     </Typography>
                    <TextField id="well"
                        label="Well"
                        className={classes.textField}
                        value={this.state.well}
                        onChange={this.handleChange('well')}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="select-status"
                        select
                        label="Select"
                        className={classes.textField}
                        value={this.state.status}
                        onChange={this.handleChange('status')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {statuses.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    {/* <TextField id="status"
                        label="Status"
                        className={classes.textField}
                        value={this.state.status}
                        onChange={this.handleChange('status')}
                        margin="normal"
                    /> */}
                    <br />
                    <TextField
                        id="multiline-flexible"
                        label="Comments"
                        multiline
                        rows="3"
                        value={this.state.comments}
                        onChange={this.handleChange('comments')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <br /> {
                        this.state.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {this.state.error}</Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary"
                        variant="raised"
                        onClick={this.clickSubmit}
                        className={classes.submit}>
                        Submit
              </Button>
                </CardActions>
            </Card>
            <Dialog open={this.state.open} onClose={this.handleRequestClose} disableBackdropClick={true}>
                <DialogTitle>Form Submitted</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Well Status Form Submitted for Review.
              </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary"
                        autoFocus="autoFocus"
                        variant="raised"
                        onClick={this.handleRequestClose}>
                        OK
                </Button>
                </DialogActions>
            </Dialog>
        </div>)
    }
}

DataEntry.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DataEntry)

