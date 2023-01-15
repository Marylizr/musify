import React, {useState} from 'react';
import './TrackList.css';
import Track from '../Track/Track'



const TrackList = ({ tracks }) => {

  const [playListTracks, setPlayListTracks] = useState([]);

 
  const addTrack = (track) => {
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    setPlayListTracks({playListTracks: tracks});
  }

  const removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  console.log(playListTracks)
  console.log(tracks)
  
    return (
      <div className="TrackList">
        {
          tracks && tracks.length > 0 && tracks.map(track => {
            return <Track track={track}
                          key={track.id}
                          onAdd={addTrack}
                          isRemoval={false}
                          onRemove={removeTrack} />
          })
        }
      </div>
    );
  
}

export default TrackList;