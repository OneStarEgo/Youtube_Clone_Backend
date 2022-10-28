import React, { useState }from 'react';

const SearchBar = (props) => {

const [searchTerm, setSearchTerm] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchVideos(searchTerm);
}


return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
            Search
            </label>
            <input type='text' placeholder='Search for a video...' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit' >Search</button>
        </form>
    </div>
)

}

export default SearchBar;