import React from 'react';
import '../Track/Track.css';


const Track = ({ isRemoval, track, onAdd, onRemove }) => {


  const addTrack = (event) => {
    onAdd(track);
  }

  const removeTrack = (event) => {
    onRemove(track);
  }

  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action" onClick={removeTrack}>-</button>
    }
    return <button className="Track-action" onClick={addTrack}>+</button>;
  }


    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name} </h3>
          <p> {track.artist}  | {track.album} </p>
        </div>
        {renderAction()}
    </div>
    )
  
}

export default Track;