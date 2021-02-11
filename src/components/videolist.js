import React from 'react';
import VideoCard from './videocard';


const VideoList = ({ videos, onVideSelect }) => {

    const playList = videos.map((video) => {
        return (<VideoCard
            key={video.id.videoId}
            video={video}
            onVideSelect={onVideSelect}
        />
        );
    });
    return (
        <div className="ui relaxed divided list">
            {playList}
        </div>
    );
}

export default VideoList; 