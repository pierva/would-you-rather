import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'

export async function getInitialData () {
  try {
    const users = await _getUsers()
    const questions = await _getQuestions()
    return {
      users,
      questions
    }
  } catch (e) {
    console.error(e);
    return {}
  }
}

export function saveQuestionAnswer (authedUser, qid, answer) {
  return _saveQuestionAnswer(authedUser, qid, answer)
}

export function saveQuestion (question) {  
  return _saveQuestion(question)
}