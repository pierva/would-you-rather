import React from 'react'
import Question from './Question'

export default function QuestionsGroup(props) {
 
  return (
    <ul>
    {props.questionIds.map((id) => (
      <li key={id}>
        <Question id={id} />
      </li>
    ))}
    </ul>
  )
}