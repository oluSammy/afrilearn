import React from 'react';
import './Footer.css';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header center-align">
                <h2 className="footer-header-text">AFRILEARN</h2>
                <h6 className="footer-header-sub-text">Free And Quality Education For Africans</h6>
            </div>
            <ul className="footer-socials">
                <RiFacebookCircleLine className="footer-icon" />
                <TiSocialTwitterCircular className="footer-icon" />
                <AiOutlineInstagram className="footer-icon" />
            </ul>
        </div>
    )
}

export default Footer
