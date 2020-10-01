import React from 'react';
import './Professional.css';

import Illustration from '../../assets/images/professional.webp';

const Professional = () => {
    return (
        <div className="professional">
            <div className="professional-section">
                <h2 className="professional-heading center-align">Professional Exams</h2>
                <p className="professional-text">
                    We offer professional exams such as ICAN... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam dolorem, excepturi deserunt numquam blanditiis tempore delectus ipsum asperiores commodi
                    similique ut quia reprehenderit ullam dolorum! Libero nobis omnis labore?
                </p>
                <div >
                    <button className="professional-btn">Get Started</button>
                </div>
            </div>
            <figure className="professional-illustration">
                <img src={Illustration} alt="Professional Illustration" className="img-responsive" />
            </figure>
        </div>
    )
}

export default Professional
