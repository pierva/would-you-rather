import { receiveUsers } from '../actions/users'
import { receiveQuestions } from './questions'
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return async (dispatch) => {
    dispatch(showLoading())
    const { users, questions } = await getInitialData()
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(hideLoading())
  }
}