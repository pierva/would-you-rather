import React, {Component } from 'react'
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
    if(!selectedOption) return alert('Please select an option')
    this.props.dispatch(handleAnswerQuestion(id, selectedOption))
  }
  
  render () {
    const { question } = this.props
    if(this.props.authedUser && question.hasAnswered.value === false)
    // Show the form to submit the answer
    // TODO: after submitting, show Poll results
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="">
              <label>
                <input
                  type="radio"
                  name={`"${question.id}"`}
                  value="optionOne"
                  className=""
                  onChange={this.handleOptionChange}
                />
                {question.optionOne.text}
              </label>
            </div>
  
            <div className="">
              <label>
                <input
                  type="radio"
                  name={`"${question.id}"`}
                  value="optionTwo"
                  className=""
                  onChange={this.handleOptionChange}
                />
                {question.optionTwo.text}
              </label>
            </div>
            <div className="">
              <button className="" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      )
  
      return (
        < PollResult question={question}/>
      )
  }
}

export default connect()(QuestionPoll)