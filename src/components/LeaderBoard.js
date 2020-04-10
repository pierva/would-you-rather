import React from 'react'
import { sortByScore } from '../utils/helpers'
import { Redirect } from 'react-router-dom'


export default function Leaderboard (props) {
  const { users } = props
  const sortedUsers = sortByScore(users) || []
  return (
    <div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.userId}>
            <div>
              Total score: {user.score}
            </div>
            <div>
              Answered: {user.answers}
            </div>
            <div>
              Questions: {user.questions}
            </div>
            <div>
              Name: {users[user.userId].name}
            </div>
            <div>
              Avatar: {users[user.userId].avatarURL}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}