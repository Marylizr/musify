import React from 'react';
import Track from '../Track/Track';

const AllList = ({ tracks , onAdd, onRemove, isRemoval }) => {

   console.log(tracks)
  return (
    <div>
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
    </div>
  )
}

export default AllList;