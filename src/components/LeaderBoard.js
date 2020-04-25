import React from 'react'
import { sortByScore } from '../utils/helpers'
import { Redirect } from 'react-router-dom'
import scoreFirst from '../style/first.png'
import scoreSecond from '../style/second.png'
import scoreThird from '../style/third.png'


export default function Leaderboard(props) {
  const { users } = props
  console.log(users);

  const sortedUsers = sortByScore(users) || []
  return (
    <ul className="container card">
      {sortedUsers.map((user, index) => (
        <li key={user.userId} className="score-group">
          <div>
            <div className="score-group-header">
              <h2>{user.name}</h2>
              {index === 0 && (
                <img src={scoreFirst} alt="medal first" className="first"></img>
              )}
              {index === 1 && (
                <img src={scoreSecond} alt="medal second" className="second"></img>
              )}
              {index === 2 && (
                <img src={scoreThird} alt="medal third" className="third"></img>
              )}
            </div>
            <div>
              <div className="score">
                <span className="score-value">
                  {user.score}
                </span>
              </div>
              <img className="avatar-big m-0" src={user.avatar} alt="avatar" />
              <h5>Questions answered: {user.answers}</h5>
              <h5>Posted questions: {user.questions}</h5>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}