import React from 'react'

export default function Login() {
  return (
    <div className='Login-container'>
      <div className='Login-wrapper'>
        <h4>SIGN IN</h4>
        <form className='login-form' action="">
          <input type="text" placeholder='username' />
          <input type="text" placeholder='password' />
          <div className='create-btn-container'>
            <button>LOGIN</button>
          </div>
          
          <a href="">DONT REMEMBER YOUR PASSWORD!</a>
          <a href="">CREATE NEW ACCOUNT</a>
         
          


        </form>
      </div>
    </div>
  )
}
