import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const HomePage = () => {
 
  const [user, token] = useAuth();

  const [videos, setVideos] = useState([]);


  useEffect(() => {
    fetchVideos();
  }, [token]);

  const fetchVideos= async (search_term="funny videos") => {
    try { 
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search_term}&key=AIzaSyCziY9ZsfE7OyP7i2p-gWRF2vPrh7ZpO_Q&part=snippet&type=video&maxResults=5`);
      setVideos(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.log(error.response.data); 
    }
  };



  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <SearchBar fetchVideos={fetchVideos}/>

      {videos &&
        videos.map((video, index) => (
          <p key={index}>
             {video.snippet.title}
             <Link to={`/video/${video.id.videoId}`}><img src={video.snippet.thumbnails.medium.url}/></Link>
             {video.snippet.description}
          </p>
          
        ))}
    </div>
  );
};

export default HomePage;