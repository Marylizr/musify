import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import Spotify from '../../util/Spotify';



const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlayListTracks] = useState([]);
  const [playListName, setPlayListName] = useState('new playlist');

  const search = (term) => {
    Spotify.search(term)

    .then((json) =>
      setSearchResults(json)
    )
    .catch((error) => {
        console.log(error);
    })
  }

  //  const addTrack = (track) => {
  //   let tracks = playlistTracks;
  //   if (tracks.find(savedTrack => savedTrack.id === track.id)) {
  //     return;
  //   }
    
  //   tracks.push(track);
  //   setPlayListTracks({playlistTracks: tracks});
  // }

  const addTrack = (tracks) => {       
    setPlayListTracks([...playlistTracks, tracks]);
}


  const removeTrack = (track) => {
    let tracks = playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    setPlayListTracks({playlistTracks: tracks});
  }

  const updatePlaylistName = (name) => {
    setPlayListName({playlistName: name});
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playListName, trackUris)
    .then(() => {
      setPlayListName({playlistName: 'New name'})
      setPlayListTracks({playlistTracks: []})
    });
  }

    return(
      <div>
        <h1>Mu<span className="highlight">si</span>Fy</h1>
          <div className="App">
            <SearchBar onSearch={search} />
            <div className="App-playlist">
              <SearchResults  
                searchResults={searchResults} 
                onAdd={addTrack}
                />
              <Playlist 
                playlistName={playListName}
                playlistTracks={playlistTracks}
                onNameChange={updatePlaylistName}
                onRemove={removeTrack}
                onSave={savePlaylist} 
              />
            </div>
          </div>
      </div>
    )
}

export default App;

