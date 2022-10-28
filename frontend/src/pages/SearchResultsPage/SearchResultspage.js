import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initialValues = {
    videoId: "",
    title: "",
    channelTitle: "",
};

const SearchResultsPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, searchForVideos)

    async function searchForVideos(){
        console.log(user)
        // try {
        //     let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=reactmongoose&key=AIzaSyCziY9ZsfE7OyP7i2p-gWRF2vPrh7ZpO_Q&part=snippet&type=video&maxResults=5", formData, {
        //         headers: {
        //             Authorization: 'Bearer ' + token
        //         }
        //     })
        //     navigate("/")
        // } catch (error) {
        //     console.log(error.message)
            
        // }
    }



    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <label>
                Video_Id:{" "}
                <input
                    type="text"
                    name="video_id"
                    value={formData.videoId}
                    onChange={handleInputChange}
                />
              </label>
              <label>
                Title:{" "}
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
              </label>
              <label>
                ChannelTitle:{" "}
                <input
                    type="text"
                    name="channeltitle"
                    value={formData.channelTitle}
                    onchange={handleInputChange}
                />
              </label>
            </form>
        </div>
    );
}

export default SearchResultsPage;