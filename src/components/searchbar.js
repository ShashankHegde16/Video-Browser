import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');

    const onSearchInput = (event) => {
        setSearchText(event.target.value);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchText);
    }


    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onSearchSubmit}>
                <div className="ui field">
                    <label>Search Videos</label>
                    <input
                        type="text"
                        placeholder="Video Search..."
                        value={searchText}
                        onChange={onSearchInput}
                    />
                </div>
            </form>
        </div>
    );



}

export default SearchBar;