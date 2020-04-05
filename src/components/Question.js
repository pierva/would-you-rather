import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {


  render() {
    // this is coming from mapStateToProps
    const { question } = this.props    
    if (question === null) {
      return (
        <p>Question not found</p>
      )
    }

    // If question exist, we can get the information we need 
    const {
      id, name, avatar, optionOne, optionTwo, hasAnswered
    } = question 
    return (
      <div>
        <p>id: {id}</p>
        <p>author: {name}</p>
        <p>avatar: {avatar}</p>
        <p>option one: {optionOne.text}</p>
        <p>option two: {optionTwo.text}</p>
        <p>Has answered: {hasAnswered.value}</p>
        <p>Has option: {hasAnswered.option}</p>
      </div>
    )
  }
}

function mapStateToProps({users, questions}, {id}) {
  const question = questions[id]

  return {
    question: question 
      ? formatQuestion(question, users[question.author], id) 
      : null
  }
}


export default connect(mapStateToProps)(Question)