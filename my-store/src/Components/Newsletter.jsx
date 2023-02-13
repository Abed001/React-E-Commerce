import React from 'react'

export default function Newsletter() {
  return (
    <div className='Newsletter-container'>
      <h1>Newsletter</h1>
      <p>Get timely update from your favorite products</p>
      <div className="newsletter-button-input">
      <input type="text" placeholder='Your email' />
      <i class="fa-sharp fa-solid fa-share"></i></div>
    </div>
  )
}
