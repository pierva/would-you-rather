/**
 * 
 * @param {Object} question Question object from data api
 * @param {Object} author Object containing all the author information
 * @param {string} authedUser ID of the authenticated user
 */

export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp, } = question
  const { name, avatarURL } = author 

  let hasAnswered = {
    value: false,
    option: null
  }
  if (optionOne.votes.includes(authedUser)) {
    hasAnswered.value = true
    hasAnswered.option = 'optionOne'
  } else if (optionTwo.votes.includes(authedUser)){
    hasAnswered.value = true
    hasAnswered.option = 'optionTwo'
  }

  return {
    id,
    timestamp,
    name,
    avatar: avatarURL,
    hasAnswered,
    optionOne,
    optionTwo
  }
}