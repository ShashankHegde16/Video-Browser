import React, { useState, useEffect } from 'react';

import SearchBar from './searchbar';
import youtube from '../services/youtube';
import VideoList from "./videolist";
import VideoDetail from './videodetails';

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);


    useEffect(() => {
        onSearchSubmit('Lovely');
    }, [])



    const onSearchSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: { q: searchTerm } });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideSelect = (video) => {
        setSelectedVideo(video);
    }



    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSearch={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideSelect={onVideSelect} />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );

}






export default App;