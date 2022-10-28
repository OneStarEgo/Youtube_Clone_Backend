import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage

  // useAuth lets us always have access to the current logged in user and their token 
  const [user, token] = useAuth();

  // rest is cars demo, can delete but reccomded to comment out first so you can use it as a ref if needed
  const [videos, setVideos] = useState([]);


  // things to go on this page
  // display default search results 
  // a form so user can enter a search term click button to ping YouTube api for that term
  // when user clicks on thumbnail it should rout them to VideoPage, this is a page you will need to make and look at app.js for router ref
  useEffect(() => {
    fetchVideos();
  }, [token]);

  const fetchVideos= async (search_term="reactmongoose") => {
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
      {/* <Link to="/searchforvideo">Search For Video!</Link> */}

      {videos &&
        videos.map((video, index) => (
          <p key={index}>
             {video.snippet.title} 
             <img src={video.snippet.thumbnails.medium.url}/>
             {video.snippet.description}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
