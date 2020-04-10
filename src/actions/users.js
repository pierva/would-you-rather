export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

/**
 * @param {string} authedUser
 * @param {string} id question's id
 * @param {string} answer answer option (optionOne or optionTwo)
 */
export function updateUserAnswers ({authedUser, id, answer}) {
  return {
    type: UPDATE_USER_ANSWERS,
    authedUser,
    id,
    answer
  }
}

/**
 * 
 * @param {Object} data
 * @param {string} data.authedUser authedUser id
 * @param {string} data.id question id
 */
export function updateUserQuestions ({authedUser, id}) {
  return {
    type: UPDATE_USER_QUESTIONS,
    authedUser,
    id
  }
}