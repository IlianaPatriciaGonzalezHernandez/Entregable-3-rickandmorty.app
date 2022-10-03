import React from 'react'
import './styles/errorScreen.css'
const ErrorScreen = () => {
  return (
    <article className='card__error_container'>
    <h2 className='card__errorScreen'>This location is not found <span className='card__error-icon'>&#9785;</span>

    </h2>
    </article>
  )
}

export default ErrorScreen