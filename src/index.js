import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import { createStore } from 'react-redux'
import { Provider } from 'react-redux'

// const store = createStore()

ReactDOM.render(
  // <Provider>
    <App />,
  /* </Provider>, */
  document.getElementById('root')
)
