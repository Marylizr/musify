import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import Spotify from '../../util/Spotify';



const App = () => {

  const [searchResults, setSearchResults] = useState([]);

  const search = (term) => {
    Spotify.search(term)
  //   .then((response) => {
  //     if (!response.ok){
  //        throw new Error("cannot fetch data")
  //     }
  //     return response.json();

  //  })
    .then((json) =>
      setSearchResults(json)
    )
    .catch((error) => {
        console.log(error);
    })
  }

  
    return(
      <div>
        <h1>Mu<span className="highlight">si</span>Fy</h1>
          <div className="App">
            <SearchBar onSearch={search} />
            <div className="App-playlist">
              <SearchResults  searchResults={searchResults} />
              <Playlist />
            </div>
          </div>
      </div>
    )
}

export default App;

