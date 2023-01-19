import React from 'react';
import '../Playlist/playlist.css';
import AllList from '../allList/allList';



const Playlist = ({ playlistTracks, onRemove, onSave, onNameChange }) => {


  const handleNameChange = e => {
    onNameChange(e.target.value);
  }


    return(
      <div className="Playlist">
        <input onChange={handleNameChange} placeholder={'New Playlist'} />
        <AllList  tracks={playlistTracks}
                  isRemoval={true}
                  onRemove={onRemove} />
        <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        
      </div>
    )
  
}

export default Playlist;