import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollResult from './PollResult'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionPoll extends Component {
  /**
   * We need formatted question property and authedUser.
   * If there is no user, show the question poll status
   * If the user has answered show the question poll status with 
   * the user selection
   * If the user has not answered, show the form to submit the poll
   */

  state = {
    selectedOption: null
  }

  handleOptionChange = (e) => {
    const selectedOption = e.target.value
    this.setState(() => ({
      selectedOption
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id } = this.props.question
    const { selectedOption } = this.state
    if (!selectedOption) return alert('Please select an option')
    this.props.dispatch(handleAnswerQuestion(id, selectedOption))
  }

  render() {
    const { question } = this.props
    if (this.props.authedUser && question.hasAnswered.value === false) {
      // Show the form to submit the answer
      return (
        <div>
          <form onSubmit={this.handleSubmit} className="form">
            <h1 className="card-header">Would you rather</h1>
            <div className="question-group">
              <img className="avatar-big" alt="avatar"
                src={question.avatar} />
              <div className="inner-group">
                <label htmlFor="optionOne" className="input-group">
                  {question.optionOne.text}
                  <input
                    type="radio"
                    name={question.id}
                    value="optionOne"
                    className=""
                    onChange={this.handleOptionChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor="optionTwo" className="input-group">
                  {question.optionTwo.text}
                  <input
                    type="radio"
                    name={question.id}
                    value="optionTwo"
                    className=""
                    onChange={this.handleOptionChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )
      }
    return (
      < PollResult question={question} />
    )
  }
}

export default connect()(QuestionPoll)