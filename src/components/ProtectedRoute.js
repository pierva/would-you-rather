import React from 'react'
import { Route, Redirect } from 'react-router-dom'


/**
 * Use this component to protect route access to unauthorized users
 * 
 * @param {string} rest.authedUser authedUser must be passed as property of
 *                                 of the ProtectedRoute component 
 */
export default function ProtectedRoute({component: Component, ...rest}) {
  return (
    <Route {...rest} render={(props) => (
      rest.authedUser ?
        < Component { ...props } />
        : <Redirect to='/login' />
    )} />

  )
}