import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {  
  const links = [
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
  ]

  const unauthLinks = [
    ...links,
    {
      path: '/login',
      text: 'LOGIN',
      options: {}
    },
  ]

  const authLinks = [
    ...links,
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

  

  return (
    <nav>
      <ul className="navbar">
        {props.authedUser ? 
        authLinks.map((link) => (
          <li key={link.text} 
            className={link.avatar ? "navbar-item d-flex" : 'navbar-item'}>
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