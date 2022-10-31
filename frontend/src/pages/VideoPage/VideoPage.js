import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY";
import VideoMapper from "../../components/VideoMapper/VideoMapper";

const VideoPage = (props) => {
    const [videos, setVideos] = useState([]);
    const [vidID, setVidID] = useState("")
    const getVids = async()=>{
        await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet &relatedToVideoId=Mfp94RjugWQ&type=video&maxResults=5&key=${API_KEY}`)
                    .then(res => {setVideos(res.data.items)})
    }

    return (
        <div>
            <button onClick={()=> {getVids()}}>Get Vids</button>
            <iframe
                title="main-vid-playe"
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${props.vidID}?autoplay=1&origin=http://example.com`}
                frameBorder="0"
            ></iframe>
            <div>
                <VideoMapper videoArray={videos} />
            </div>
        </div>

    );
};



export default VideoPage;