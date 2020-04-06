import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsGroup from './QuestionsGroup'


class Dashboard extends Component {
  state = {
    answered: true
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        {this.state.answered 
          ? <QuestionsGroup questionIds={this.props.answeredIds} />
          : <QuestionsGroup questionIds={this.props.notAnsweredIds} />
          }
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  const answeredIds = []
  const notAnsweredIds = []
  
  Object.keys(questions) 
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .forEach((key) => {
        const wasAnswered = questions[key].optionOne.votes
          .concat(questions[key].optionTwo.votes).length > 0 ? true : false
        wasAnswered ? answeredIds.push(key) : notAnsweredIds.push(key)
      })  
  return {
    answeredIds,
    notAnsweredIds
  }
}

export default connect(mapStateToProps)(Dashboard)