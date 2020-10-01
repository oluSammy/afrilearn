import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <h2 className="banner-text">What would you love to learn?</h2>
            <div className="banner-search-box">
                <SearchBox />
            </div>
            {/* <div className="banner-more">
                <h2 className="banner-more-text">Free and Quality Education For All Africans</h2>
                <button className="banner-button">Learn More</button>
            </div> */}
        </div>
    )
}

export default Banner
