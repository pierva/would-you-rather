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
/**
 * 
 * @param {Object} users Must have the following properties: 
 *                       id, questions, answers
 * @param {Object} users[key]
 * @param {string} users[key].id user id
 * @param {Object} users[key].answers
 * @param {Array} users[key].question
 * 
 * @returns {Object} Object with following properties:
 *                   score: int
 *                   questions: int
 *                   answers: int
 *                   userId: string
 */
export function sortByScore (users) {
  const sorted = []
  const scores = {}
  Object.keys(users).sort((a,b) => {
    const userAQ = users[a].questions.length
    const userAA = Object.keys(users[a].answers).length
    const userBQ = users[b].questions.length
    const userBA = Object.keys(users[b].answers).length
    scores[users[a].id] = {
      score: userAQ + userAA ,
      questions: userAQ,
      answers: userAA,
      userId: users[a].id
    }
    scores[users[b].id] = {
      score: userBQ + userBA,
      questions: userBQ,
      answers: userBA,
      userId: users[b].id
    }
    return (userBQ + userBA) - (userAQ + userAA )
  })
  .forEach((key) => {
    sorted.push(scores[key])
  })
  return sorted
}