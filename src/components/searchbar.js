import React from 'react';

class SearchBar extends React.Component {

    state = { searchText: '' }

    onSearchInput = (event) => {
        this.setState({ searchText: event.target.value });
    }
    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.searchText);
    }


    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="ui field">
                        <label>Search Videos</label>
                        <input
                            type="text"
                            placeholder="Video Search..."
                            value={this.state.searchText}
                            onChange={this.onSearchInput}
                        />
                    </div>
                </form>
            </div>
        );
    }


}

export default SearchBar;