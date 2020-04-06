import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { logoutUser } from '../actions/authedUser'
import LoadingBar from 'react-redux-loading'
import Login from '../components/Login'
import Nav from '../components/Nav'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import LeaderBoard from '../components/LeaderBoard'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  handleLogout = () => {
    this.props.dispatch(logoutUser())
  }

  render() { 
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#0909b1', height: '5px' }} />
          <Nav 
              authedUser={this.props.username} handleLogout={this.handleLogout}/>
          {this.props.loading === true
            ? 
            <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/login' exact component={Login} />
              {/* <Route path='/leaderboard' exact component={Login} /> */}
            </div>
            :            
            <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/login' exact component={Login} />
                {/* <Route path='/new' exact component={NewQuestion} /> */}
             </div>
          }
        </Fragment>
      </Router>
    )
  }
}


function mapStateToProps({ authedUser, users }) {
  // need to grap the user here (passed in the arguments)
  // and add a loading property to the state
  return {
    // if authedUser is null, loading will be true
    loading: authedUser === null,
    authedUser,
    username: authedUser ? users[authedUser].name : null
  }
}

export default connect(mapStateToProps)(App)