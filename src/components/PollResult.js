import React from 'react'

export default function PollResult (props) {
  const { question } = props
  const totVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  return (
    <div>
      <div>
        {/* Show user selected answer if present*/}
        {question.hasAnswered.option === "optionOne" && 
          <span>Your selection</span>}
        <h4>{question.optionOne.text}</h4>
        <p>votes: {question.optionOne.votes.length} out of {totVotes}</p>
      </div>
      <hr />
      <div>
        {/* Show user selected answer if present*/}
        {question.hasAnswered.option === "optionTwo" && 
          <span>Your selection</span>}
        <h4>{question.optionTwo.text}</h4>
        <p>votes: {question.optionTwo.votes.length} out of {totVotes}</p>
      </div>
    </div>
  )
}