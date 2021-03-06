import React from 'react'
import {useState} from "react"
import './AuthForm.css'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }


    return (
        <section className="auth">
            <h1>{isLogin ? 'Login' : 'Register now'}</h1>
            <form>
                <div className="control">
                    <label htmlFor="email">Add your E-mail</label>
                    <input type="email" id="email" required />
                </div>
                <div className="control">
                    <label htmlFor="password">Add your Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className="actions">
                    <button>{isLogin ? 'Login' : 'Create an Account'}</button>
                    <button type="button" className="toggle" onClick={switchAuthModeHandler}>
                        {isLogin ? 'Create new Account' : 'Login with an existing account'}
                    </button>
                </div>
                
            </form>

        </section>
    )
}

export default AuthForm
