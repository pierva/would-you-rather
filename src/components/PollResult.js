import React from 'react'

export default function PollResult(props) {
  const { question } = props
  const totVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionOneVotes = question.optionOne.votes.length
  const optionTwoVotes = question.optionTwo.votes.length
  const scoreOne = Math.round(optionOneVotes / totVotes * 100)
  const scoreTwo = Math.round(optionTwoVotes / totVotes * 100)
  return (
    <div>
      <h2 className="card-header">
        Would you rather:
      </h2>
      <div className="question-group">
        <img className="avatar-big" src={question.avatar} />
        <div className="inner-group">
        <div className={question.hasAnswered.option === "optionOne" 
                ? 'option-selected' : ''}>
            <p className="poll-option">{question.optionOne.text}</p>
            <div className="score-bar">
              <div className="filler text-center"
                style={{ width: `${scoreOne}%` }}>
                {scoreOne}%
              </div>
            </div>
            <h6 className="text-center">
              {optionOneVotes} out of {totVotes}
            </h6>
          </div>

          <div className={question.hasAnswered.option === "optionTwo" 
                ? 'option-selected' : ''}>
              
            <p className="poll-option">{question.optionTwo.text}</p>
            <div className="score-bar">
              <div className="filler text-center"
                style={{ width: `${scoreTwo}%` }}>
                {scoreTwo}%
              </div>
            </div>
            <h6 className="text-center">
              {optionTwoVotes} out of {totVotes}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}