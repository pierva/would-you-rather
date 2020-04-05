import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Question from '../components/Question'
import Login from '../components/Login'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#0909b1', height: '5px' }}/>

        {/* <Question id='8xf0y6ziyjabvozdd253nd'/>
        <hr /> */}
        {this.props.authedUser 
        ? <Question id='8xf0y6ziyjabvozdd253nd'/> 
        : <Login />
        }
      </Fragment>
    )
  }
}


function mapStateToProps({ authedUser }) {
  // need to grap the user here (passed in the arguments)
  // and add a loading property to the state
  return {
    // if authedUser is null, loading will be true
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)