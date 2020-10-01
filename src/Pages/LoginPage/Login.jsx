import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import './Login.css';

import { AiOutlineMail, AiOutlineLogin } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="login-box">
                <form className="login-form">
                    <h3 className="login-form-header">Log In</h3>
                    <div className="login-form-group">
                        <AiOutlineMail className="login-icon" />
                        <input type="email" className="login-input" placeholder="Email" />
                    </div>
                    <div className="login-form-group">
                        <RiLockPasswordLine className="login-icon" />
                        <input type="password" className="login-input" placeholder="Password" />
                    </div>
                    <div className="center-align">
                        <button className="login-form-btn" type="submit">
                            <span style={{textAlign: 'center'}}>Login</span>
                            <AiOutlineLogin className="login-form-btn-icon" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
