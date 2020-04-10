import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { updateUserAnswers, updateUserQuestions } from './users'

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


function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
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

/**
 * 
 * @param {Object} qustion
 * @param {string} question.optionOneText Option one answer
 * @param {string} question.optionTwoText Option two answer
 *
 */
export function handleAddQuestion(question) {
  return async (dispatch, getState) => {
    const { authedUser } = getState()
    const {optionOneText, optionTwoText} = question
    dispatch(showLoading())
    try {
      const newQuestion = await saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser
      })
      dispatch(addQuestion(newQuestion)) 
      dispatch(updateUserQuestions({
        authedUser,
        id: newQuestion.id
      }))
      return dispatch(hideLoading())
    }
    catch (e) {
      console.warn('Error in handleAddQuestion:', e)
      dispatch(hideLoading())
      return alert('Something went wrong while posting your question. Please try again')
    }
  }
}