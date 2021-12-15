import React from 'react'
import '../AuthStyles/style.css'
import { Link } from 'react-router-dom'

export default function ForgotPassord() {
    return (
        <div>
            <div className='forgotpasswordPageContainer'>
                <div className='forgotpassword'>
                <h2>Forgot Password</h2>
                    <form  autoComplete='on'>
                    <input placeholder='Email' type='email'></input>
                    <button>Send Email</button>
                </form>
                <Link to="/SignIn">Sign In</Link>
                </div>
            </div>
        </div>
    )
}


