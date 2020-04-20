import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import logo from '../style/logo.png'

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
      <div className="login-container pt-2">
        <form onSubmit={this.handleSubmit} className="card">
          <div className="text-center">
            <h1 className="card-header">Would you RaThER?</h1>
            <small>Please login to continue</small>
            <div>
              <img src={logo} alt="logo" className="logo"/>
            </div>
          </div>
          <select onChange={this.handleChange} className="dropdown">
            <option key='none' value='none'>Select</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}
                // style={{backgroundImage: `url("${user.avatarURL}")`}}
              >
                {user.name}</option>
            ))}
          </select>
            <button type='submit'
              className="btn btn-primary w-100"
            >Login</button>
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