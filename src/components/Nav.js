import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {  
  const authLinks = [
    {
      path: '/',
      text: 'Home',
      options: {}
    },
    {
      path: '/new',
      text: 'New Question',
      options: {}
    },
    {
      path: '/leaderboard',
      text: 'Leaderboard',
      options: {}
    },
    {
      path: '#',
      text: `Welcome, ${props.authedUser}`,
      options: {},
      avatar: props.avatar
    },
    {
      path: '#',
      text: 'LOGOUT',
      options: 
        {
          clickHandler: props.handleLogout
        }
    }
  ]

  const unauthLinks = [
    {
      path: '/',
      text: 'Home',
      options: {}
    },
    {
      path: '/login',
      text: 'LOGIN',
      options: {}
    }
  ]

  return (
    <nav>
      <ul className="navbar">
        {props.authedUser ? 
        authLinks.map((link) => (
          <li key={link.text} className="navbar-item">
            <NavLink to={link.path} exact 
              className={link.avatar ? 'no-link' : 'link'}
              activeClassName={link.path === "#" ? '' : 'active'}
              onClick={link.options.clickHandler ? link.options.clickHandler : null}
            >
              {link.text}
            </NavLink>
            {link.avatar ? <img className="navbar-avatar"
              src={link.avatar} alt="avatar"/> : ''}
          </li>
          ))
        : 
        unauthLinks.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} exact 
              className="link"
              activeClassName='active'>
              {link.text}
            </NavLink>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}