import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
    const [videos, setVideos] = useState([]);
    const { videoId } = useParams();
    const [vidID, setVidID] = useState({});
    const getVids = async()=>{
        await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideo=${videoId}type=video&maxResults=5&key=${API_KEY}`)
                    .then(res => {setVideos(res.data.items)})
    }

    return (
        <div>
            <iframe
                title="main-vid-playe"
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                frameBorder="0"
            ></iframe>
            <button onClick={()=> {getVids()}}>Get Related Videos</button>
            <div>
                <VideoMapper videoArray={videos} />
            </div>
        </div>

    );
};



export default VideoPage;