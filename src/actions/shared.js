import { receiveUsers } from '../actions/users'
import { getInitialData } from '../utils/api'

export function handleInitialData () {
  return async (dispatch) => {
    const { users, questions } = await getInitialData()
    console.log(users, questions);
    
    return dispatch(receiveUsers(users))
  }
}