import React from 'react';

import SearchBar from './searchbar';
import youtube from '../services/youtube';
import VideoList from "./videolist";
import VideoDetail from './videodetails';






class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit('Dota2');
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: { q: searchTerm } });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideSelect = (video) => {
        this.setState({ selectedVideo: video });
    }



    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearch={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideSelect={this.onVideSelect} />
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default App;