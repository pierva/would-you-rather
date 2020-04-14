import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    userId: '',
    redirectHome: false
  }
  
  handleSubmit = (e) => {
    e.preventDefault()    
    const { dispatch } = this.props
    const { userId } = this.state
    if(userId === ''){
      return alert('Invalid user')
    }
    dispatch(setAuthedUser(userId))

    this.setState(() => ({
      redirectHome: true
    }))
  }

  handleChange = (e) => {
    const userId = e.target.value
    this.setState(() => ({
      userId: userId === 'none' ? '' : userId,
      redirectHome: false
    }))
  }

  render() {
    const { users } = this.props
    if (this.state.redirectHome) {
      return <Redirect to='/' />
    }
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