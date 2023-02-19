import React from 'react'
import { Button } from 'react-bootstrap'

export default function Register() {
    return (
        <div className='Register-container'>
            <div className='Register-wrapper'>
                <h4>CREATE AN ACCOUNT</h4>
                <form action="">
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='last name' />
                    <input type="text" placeholder='username' />
                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='password' />
                    <input type="text" placeholder='confirm password' />
                    <p> By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></p>
                        <div className='create-btn-container'><Button>CREATE</Button></div>
                    
                </form>
            </div>
        </div>
    )
}
