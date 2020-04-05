import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    userId: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { userId } = this.state
    userId === '' ? alert('Invalid user')
      : dispatch(setAuthedUser(userId))

    // todo: after login redirect to home page
  }

  handleChange = (e) => {
    const userId = e.target.value
    this.setState(() => ({
      userId: userId === 'none' ? '' : userId
    }))
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option key='none' value='none'>Select</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>{user.name}</option>
            ))}
          </select>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const ordered = [] 
  Object.keys(users)
      .sort().forEach((key) => {
        ordered.push(users[key])
      })
  return {
    users: ordered
  }
}

export default connect(mapStateToProps)(Login)