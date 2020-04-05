import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Question from '../components/Question'
import Login from '../components/Login'
import Nav from '../components/Nav'
import Dashboard from '../components/Dashboard'
import NewQuestion from '../components/NewQuestion'
import LeaderBoard from '../components/LeaderBoard'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {   
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#0909b1', height: '5px' }} />
          {!this.props.authedUser
            ? <Login />
            : <Nav 
              authedUser={this.props.username} />
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