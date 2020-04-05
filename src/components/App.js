import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Question from '../components/Question'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: '#0909b1', height: '5px' }}/>
        <Question id='8xf0y6ziyjabvozdd253nd'/>
      </div>
    )
  }
}


function mapStateToProps() {
  // need to grap the user here (passed in the arguments)
  // and add a loading property to the state

  return {}
}

export default connect(mapStateToProps)(App)