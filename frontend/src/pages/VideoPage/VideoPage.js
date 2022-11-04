import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import { useParams } from "react-router-dom";


const VideoPage = (props) => {
    const [videos, setVideos] = useState([]);
    const { videoId, video_id } = useParams();
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [comments, setComments] = useState([]);

    const getRelatedVids = async()=>{
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${API_KEY}&part=snippet`)
            setRelatedVideos(response.data.items)
        }catch(error){
            console.log(error.response.data)

        }
    }

    const vidComments = async()=>{
        try{
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/`)
            setComments(response.data)
        }catch(error){
            console.log(error.response.data)
        }
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
            <button onClick={()=> {getRelatedVids()}}>Get Related Videos</button>
            <button onClick={()=> {vidComments()}}>Comments</button>
            {/* <div>
                <CommentSection /> 
            </div> */}
            <div>
                <VideoMapper videoArray={relatedVideos} />
            </div>
        </div>

    );
};



export default VideoPage;