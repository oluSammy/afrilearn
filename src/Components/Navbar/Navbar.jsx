import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/afrilearn_logo.png';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar flex-align">
            <Link to="/" className="navbar-logo-box">
                <img className="img-responsive" src={Logo} alt=""/>
            </Link>
            <ul className="navbar-list flex-align">
                <li className="navbar-list-item">About</li>
                <li className="navbar-list-item">FAQ</li>
                <li className="navbar-list-item">Blog</li>
                <li className="navbar-list-item">Forum</li>
                <li className="navbar-list-item">Contact</li>
                <Link to ="/login" className="navbar-list-item">Login</Link>
                <Link to="/register" className="navbar-list-item">Register</Link>
            </ul>
            <ul className="navbar-socials flex-align">
                <li className="navbar-social-item"><RiFacebookCircleLine className="navbar-icon" /></li>
                <li className="navbar-social-item"><TiSocialTwitterCircular className="navbar-icon" /></li>
                <li className="navbar-social-item"><AiOutlineInstagram className="navbar-icon" /></li>
            </ul>
        </div>
    )
}

export default Navbar
