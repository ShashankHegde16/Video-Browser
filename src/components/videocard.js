import React from 'react';
import '../style/videocard.css'

const VideoCard = ({ video, onVideSelect }) => {

    return (
        <div className="item video-card" onClick={() => onVideSelect(video)}>
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
            />
            <div className='content'>
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );

}

export default VideoCard;