import React from 'react';
import './TrackList.css';
import Track from '../Track/Track'



const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {

  console.log(tracks)

    return (
      <div className="TrackList">
        {
          tracks && tracks.length > 0 && tracks.map(track => {
            return <Track track={track}
                          key={track.id}
                          onAdd={onAdd}
                          isRemoval={isRemoval}
                          onRemove={onRemove} />
          })
        }
      </div>
    );
  
}

export default TrackList;