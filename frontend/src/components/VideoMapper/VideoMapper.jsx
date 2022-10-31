import React from 'react';
import VideoPresenter from '../VideoPresenter/VideoPresenter';

const VideoMapper = ({videoArray}) => {
    return (
        <ul>
            {videoArray.map(el => <VideoPresenter key={el.id.videoId} video = {el}/>)}
        </ul>
    );
}

export default VideoMapper;