import React from 'react';
import './SearchBox.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBox = () => {
    return (
        <div className="search-box">
            <form className="search-box-form">
                <div className="search-box-form-group">
                    <AiOutlineSearch className="search-box-icon" />
                    <input className="search-box-search" type="search" name="search" id="search" placeholder="Search over 90 courses" />
                </div>
                <button className="search-box-btn" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox
