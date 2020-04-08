import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import QuestionPoll from './QuestionPoll'

class Question extends Component {
  state = {
    openPoll: false
  }

  togglePoll = () => {
    this.setState((prevState) => ({
      openPoll: !prevState.openPoll
    }))
  }
  

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
      name, avatar, hasAnswered
    } = question   
          
    return (
      <div>
        {this.state.openPoll 
        ? <div>
          < QuestionPoll 
            authedUser={this.props.authedUser} 
            question={this.props.question}
            />
          <button onClick={this.togglePoll}>Close Poll</button>
          </div>
        :
        <div>
          <p>author: {name}</p>
          <p>avatar: {avatar}</p>
          <button onClick={this.togglePoll}>View Poll</button>
        </div>
        }   
      </div>
    )
  }
}

function mapStateToProps({users, questions, authedUser}, {id}) {
  const question = questions[id]

  return {
    question: question 
      ? formatQuestion(question, users[question.author], authedUser) 
      : null,
    authedUser
  }
}


export default connect(mapStateToProps)(Question)