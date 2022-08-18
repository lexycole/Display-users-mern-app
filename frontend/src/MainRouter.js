import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/core/Home'
import Users from './components/user/Users'
import Signup from './components/user/Signup'
import Signin from './components/auth/Signin'
import EditProfile from './components/user/EditProfile'
import Profile from './components/user/Profile'
import PrivateRoute from './components/auth/PrivateRoute'
import Menu from './components/core/Menu'

class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  // componentDidMount() {
  //   const jssStyles = document.getElementById('jss-server-side')
  //   if (jssStyles && jssStyles.parentNode) {
  //     jssStyles.parentNode.removeChild(jssStyles)
  //   }
  // }

  render() {
    return (<React.Fragment>
        <div>
      <Menu/>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route> 
        <PrivateRoute path="/user/edit/:userId">
          <EditProfile />
        </PrivateRoute>
        <Route path="/user/:userId">
          <Profile />
          </Route>
      </Switch>
    </div>
    </React.Fragment>)
  }
}

export default MainRouter
