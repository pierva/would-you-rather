import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsGroup from './QuestionsGroup'


class Dashboard extends Component {
  state = {
    answered: false
  }

  toggleGroup = () => {
    this.setState((prevState) => ({
      answered: !prevState.answered
    }))
  }

  render() {
    // Show all the questions if there is no logged user
    if(!this.props.authedUser) {  
      return (
        <div>
          <h2 className="warning text-center p-1">
            Please login to partecipate to the poll
            </h2>
          <div className="card-top container p-1"></div>
          <QuestionsGroup questionIds={this.props.allIds} />
        </div>
      )
    }
    return (
      <div>
        <div className="container">
        <button onClick={this.toggleGroup} className="card-top ">
          {this.state.answered ? "Show Unanswered" : "Show Answered"}
        </button>
        </div>
        {this.state.answered 
          ? <QuestionsGroup questionIds={this.props.answeredIds} />
          : <QuestionsGroup questionIds={this.props.notAnsweredIds} />
          }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  const answeredIds = []
  const notAnsweredIds = []
  const allIds = []
  
  Object.keys(questions) 
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .forEach((key) => {
        // loop over the questions and check if logged user has answered
        // the question
        const wasAnswered = questions[key].optionOne.votes
          .concat(questions[key].optionTwo.votes)
          .includes(authedUser) ? true : false
        wasAnswered ? answeredIds.push(key) : notAnsweredIds.push(key)
        allIds.push(key)
      })  
  return {
    answeredIds,
    notAnsweredIds,
    allIds,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)