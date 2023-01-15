import React, {useState} from 'react';
import '../Playlist/playlist.css';
import TrackList from '../TrackList/TrackList';
import Spotify from '../../util/Spotify';


const Playlist = () => {

  const [playListName, setPlayListName] = useState('new name');
  const [playListTracks, setPlayListTracks] = useState([]);


  const updatePlaylistName = (name) => {
    setPlayListName({playlistName: name});
  }

  const handleNameChange = e => {
  updatePlaylistName(e.target.value);
  }

  
  const savePlaylist = () => {
    const trackUris = playListTracks.map(track => track.uri);
    Spotify.savePlaylist(playListName, trackUris)
      .then(() => {
      setPlayListName({playlistName: 'New name'})
      setPlayListTracks({playlistTracks: []})
    });
  }

  const removeTrack = (track) => {
    let tracks = playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    setPlayListTracks({playlistTracks: tracks});
    
  }

  

    return(
      <div className="Playlist">
        <input onChange={handleNameChange} defaultValue={'New Playlist'} />
        <TrackList tracks={playListTracks}
                   isRemoval={false}
                   onRemove={removeTrack} />
        <button className="Playlist-save" onClick={savePlaylist}>SAVE TO SPOTIFY</button>
      </div>
    )
  
}

export default Playlist;