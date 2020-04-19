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
      name, avatar, optionOne
    } = question   
          
    return (
      <div className="card">
        {this.state.openPoll 
        ? <div>
          < QuestionPoll 
            authedUser={this.props.authedUser} 
            question={this.props.question}
            />
          <button onClick={this.togglePoll}
            className="close-btn"
          >&#8617;</button>
          </div>
        :
        <div>
          <h3 className='card-header'>{name} asks:</h3>
          <div className="question-group">
            <img className="avatar-big" src={avatar} alt="avatar" />
            <div className="inner-group">
              <h2 className="question-header">Would you rather:</h2>
              <p>{optionOne.text}...</p>
              <button 
                className="btn btn-primary-outline"
                onClick={this.togglePoll}>View Poll</button>
            </div>
          </div>
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