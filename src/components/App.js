import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        Would you rather
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