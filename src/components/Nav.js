import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' exact activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/' exact onClick={props.handleLogout}>
            Logged as {props.authedUser} | LOGOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}