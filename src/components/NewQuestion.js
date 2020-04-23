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
    console.log(this.props.authedUser);
    
    if (returnHome === true ) {
      return <Redirect to='/' />
    }   
    return (
      <div className="container p-2 card">
        <h3 className="text-center">¿¿New question?? </h3>
        <h1 className="text-center border-bottom">Would you Rather:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = "optionOneText" className="label">Option One</label>
          <input 
            className="form-field"
            name="optionOneText"
            placeholder="option one text"
            onChange={this.handleChange}
            value={optionOneText}
          />
          <div className="text-center pt-1">
            OR
          </div>
          <label htmlFor="optionTwoText" className="label">Option Two</label>
          <input
            className="form-field"
            name="optionTwoText"
            placeholder="option two text"
            onChange={this.handleChange}
            value={optionTwoText}
          />
          <button
            type="submit"
            className="btn btn-primary"
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