import logoImg from '../../Image/logo_1.png'
import { useState } from 'react'

function Password(){
    const [resetEmail, setResetEmail] = useState("");
    const handleResetEmail = (event)=>{
        setResetEmail(event.target.value);
    }
    const handleResetPasswordForm = (event)=>{
        if(resetEmail===''){
            event.preventDefault();
            alert("Please, fill in the required field!")
        }
        else{
            alert(`New password credentials will be sent to your email ${resetEmail}`)
        }
    }
    return(
        <div className="password-reset-container">
            <div className="password-reset-box">
                <div className="logo-container">
                    <img className='logo-img' src={logoImg} alt="logo" />
                    <span className='logo-text'>EAST TELECOM</span>
                </div>
                <h1 className="title-large">Forgot Password?</h1>
                <p className="text password-reset-text">Please, enter your email address to request for a new password.</p>
                <form action="/forgot-password" onSubmit={handleResetPasswordForm}>
                    <label htmlFor="username" className="label">Email Address</label>
                    <input type="email" value={resetEmail} onChange={handleResetEmail} name="email" autoComplete='email' id="email" className="input password-input" placeholder="user@mail.com"/>
                    <button type='submit' className='button'>Reset password</button>
                </form>
                <a href="/login" className="back-to-login">Back to login</a>
            </div>
        </div>
    )
}


export default Password