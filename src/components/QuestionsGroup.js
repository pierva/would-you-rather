import React from 'react'
import Question from './Question'

export default function QuestionsGroup(props) {
 
  return (
    <ul className='container'>
    {props.questionIds.length === 0 && 
      <li className="text-center p-2 card">No questions available</li>
    }
    {props.questionIds.map((id) => (
      <li key={id} className="card">
        <Question id={id} />
      </li>
    ))}
    </ul>
  )
}