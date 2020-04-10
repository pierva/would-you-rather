import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'


class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    returnHome: false
  }

  handleChange = (e) => {
    const text = e.target.value
    const option = e.target.name
    this.setState(() => ({
      [option]: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {optionOneText, optionTwoText} = this.state
    this.props.dispatch(handleAddQuestion({optionOneText, optionTwoText}))
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      returnHome: true
    }))
  }

  render () {
    const { optionOneText, optionTwoText, returnHome } = this.state 
    if (returnHome === true ) {
      return <Redirect to='/' />
    }   
    return (
      <div>
        <h1>Would you Rather</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = "optionOneText">Option One</label>
          <input 
            name="optionOneText"
            placeholder="option one text"
            onChange={this.handleChange}
            value={optionOneText}
          />
          <hr />
          <label htmlFor="optionTwoText">Option One</label>
          <input
            name="optionTwoText"
            placeholder="option two text"
            onChange={this.handleChange}
            value={optionTwoText}
          />
          <button
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Add question
          </button>
        </form>
      </div>
    )
  }

}


export default connect()(NewQuestion)