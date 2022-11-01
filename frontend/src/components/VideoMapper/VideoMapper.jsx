import React from 'react';
import VideoPresenter from '../VideoPresenter/VideoPresenter';
import styled from 'styled-components';

const FlexContainer = styled.ul`
display:flex;
flex-wrap: wrap;
`

const VideoMapper = ({videoArray}) => {
    return (
        <FlexContainer>
            {videoArray.map(el => <VideoPresenter key={el.id.videoId} video = {el}/>)}
        </FlexContainer>
    );
}

export default VideoMapper;