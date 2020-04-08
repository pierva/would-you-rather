import React, { Component } from 'react'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e) => {
    const text = e.target.value
    const option = e.target.name
    this.setState(() => ({
      [option]: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.authedUser, this.state);
    
  }

  render () {
    const { optionOne, optionTwo } = this.state    
    return (
      <div>
        <h1>Would you Rather</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = "optionOne">Option One</label>
          <input 
            name="optionOne"
            placeholder="option one text"
            onChange={this.handleChange}
            value={optionOne}
          />
          <hr />
          <label htmlFor="optionTwo">Option One</label>
          <input
            name="optionTwo"
            placeholder="option two text"
            onChange={this.handleChange}
            value={optionTwo}
          />
          <button
            type="submit"
            disabled={optionOne === "" || optionTwo === ""}
          >
            Add question
          </button>
        </form>
      </div>
    )
  }

}


export default NewQuestion