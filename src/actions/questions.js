import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { updateUserAnswers } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion ({id, answer, authedUser}) {
  return {
    type: ANSWER_QUESTION,
    id,
    answer,
    authedUser
  }
}


/**
 * 
 * @param {string} id question id
 * @param {string} answer selected option value
 */
export function handleAnswerQuestion (id, answer) {
  return async (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())   
    try {
      await saveQuestionAnswer({
        authedUser,
        qid: id,
        answer
      })
    } catch (e) {
      dispatch(hideLoading())
      return alert('Something went wrong while processing your request')
    }
    dispatch(answerQuestion({
      id,
      answer,
      authedUser
    })) 
    dispatch(updateUserAnswers({
      authedUser,
      id,
      answer
    }))
    return dispatch(hideLoading())
  }
}