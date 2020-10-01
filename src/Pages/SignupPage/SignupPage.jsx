import React from 'react';
import './SignupPage.css';
import { AiOutlineMail, AiOutlineLogin, AiOutlineSelect } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiUser, BiPhone } from 'react-icons/bi';
import Navbar from './../../Components/Navbar/Navbar';

const SignupPage = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="login-box">
                <form className="login-form">
                    <h3 className="login-form-header">Register</h3>
                    <div className="login-form-group">
                        <BiUser className="login-icon" />
                        <input type="text" className="login-input" placeholder="First Name" />
                    </div>
                    <div className="login-form-group">
                        <BiUser className="login-icon" />
                        <input type="text" className="login-input" placeholder="Last Name" />
                    </div>
                    <div className="login-form-group">
                        <BiPhone className="login-icon" />
                        <input type="number" className="login-input" placeholder="Phone Number" />
                    </div>
                    <div className="login-form-group">
                        <AiOutlineMail className="login-icon" />
                        <input type="email" className="login-input" placeholder="Email" />
                    </div>
                    <div className="login-form-group">
                        <RiLockPasswordLine className="login-icon" />
                        <input type="password" className="login-input" placeholder="Password" />
                    </div>
                    <div className="login-form-group">
                        <AiOutlineSelect className="login-icon" />
                        <select className="login-input" name="" id="" >
                            <option value="Test 1">Select Category</option>
                            <option value="Test 1">Test 1</option>
                            <option value="Test 1">Test 1</option>
                            <option value="Test 1">Test 1</option>
                        </select>
                    </div>
                    <div className="login-form-group">
                        <AiOutlineSelect className="login-icon" />
                        <select className="login-input" name="" id="" >
                            <option value="Test 1">Select State</option>
                            <option value="Test 1">Test 1</option>
                            <option value="Test 1">Test 1</option>
                            <option value="Test 1">Test 1</option>
                        </select>
                    </div>
                    <div className="center-align">
                        <button className="login-form-btn" type="submit">
                            <span style={{textAlign: 'center'}}>Register</span>
                            <AiOutlineLogin className="login-form-btn-icon" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage
