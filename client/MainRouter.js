import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import Wellstatuses from './wellstatus/Wellstatuses'
import DataEntry from './wellstatus/DataEntry'
import EditWellStatus from './wellstatus/EditWellStatus'

class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (<div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Signin} />
        <PrivateRoute path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
        <PrivateRoute path="/wellstatuses" component={Wellstatuses} />
        <PrivateRoute path="/wsudataentry" component={DataEntry} />
        <PrivateRoute path="/wellstatus/:id" component={EditWellStatus} />
      </Switch>
    </div>)
  }
}

export default MainRouter
