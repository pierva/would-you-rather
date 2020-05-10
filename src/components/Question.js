import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'


class Question extends Component {
  state = {
    openPoll: false
  }

  togglePoll = () => {
    this.setState((prevState) => ({
      openPoll: !prevState.openPoll
    }))
  }

  openTweet = (e, id) => {
    e.preventDefault()
    this.togglePoll()
    this.props.history.push(`/question/${id}`)
  }
  

  render() {
    // this is coming from mapStateToProps
    const { question } = this.props    
    if (question === null) {
      return (
        <div className="container pt-2">
          <h1>Question not found</h1>
        </div>
      )
    }

    // If question exist, we can get the information we need 
    const {
      id, name, avatar, optionOne
    } = question   
          
    return (
      <div>
        <div>
          <h2 className='card-header'>{name} asks:</h2>
          <div className="question-group">
            <img className="avatar-big" src={avatar} alt="avatar" />
            <div className="inner-group">
              <h2 className="question-header">Would you rather:</h2>
              <p>{optionOne.text}...</p>
              <Link to={`/question/${id}`}
                className="btn btn-primary-outline text-center">
                  View Poll
              </Link>
            </div>
          </div>
        </div> 
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


export default withRouter(connect(mapStateToProps)(Question))