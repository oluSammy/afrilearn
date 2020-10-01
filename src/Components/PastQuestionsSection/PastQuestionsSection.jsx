import React from 'react';
import './PastQuestionsSection.css';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import Waec from '../../assets/images/waec.png';
import Neco from '../../assets/images/necco.png';
import Jamb from '../../assets/images/jamb.png';

const PastQuestionsSection = () => {
    return (
        <div className="question">
            <div className="question-header flex-align">
                <h2 className="question-heading">Free Past Questions</h2>
                <RiQuestionAnswerLine className="question-header-icon" />
            </div>
            <div className="question-container">
                <div className="question-box">
                    <figure className="question-box-img-container">
                        <img src={Waec} alt="Waec" className="img-responsive"/>
                    </figure>
                    <h5 className="question-box-title center-align">WAEC</h5>
                    <p className="question-box-text center-align">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="center-align">
                        <button className="question-box-cta">Get Questions Now</button>
                    </div>
                </div>
                <div className="question-box">
                    <figure className="question-box-img-container">
                        <img src={Jamb} alt="Jamb" className="img-responsive"/>
                    </figure>
                    <h5 className="question-box-title center-align">JAMB/UTME</h5>
                    <p className="question-box-text center-align">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="center-align">
                        <button className="question-box-cta">Get Questions Now</button>
                    </div>
                </div>
                <div className="question-box">
                    <figure className="question-box-img-container">
                        <img src={Neco} alt="Neco" className="img-responsive"/>
                    </figure>
                    <h5 className="question-box-title center-align">NECO</h5>
                    <p className="question-box-text center-align">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="center-align">
                        <button className="question-box-cta">Get Questions Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastQuestionsSection
