import React from 'react'

export default function Error404 (props) {
  return (
    <div className="container pt-2 text-center"> 
      <h1 className="error-header">Oooopsss!</h1>
      <div className='error-container'>
        <div>
          <h1 className="error-number">404</h1>
        </div>
        <div>
          <h2 className="error-info">We couldn't find this page.</h2>
        </div>
      </div>
    </div>
  )
}