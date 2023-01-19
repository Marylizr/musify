import React, { useState } from 'react';
import '../searchbar/searchBar.css';
import music from '../../util/music2.png'



const SearchBar = ({ onSearch }) => {
  
  const [term, setTerm] = useState()

  const handleTermChange = e => {
    const value = e.target.value;
    setTerm(value);
}

  const search = () => {
    onSearch(term);
}
 
  
    return(
      <div className="SearchBar">
        <div className="blockone">
          <input placeholder="Enter A Song Title" onChange={handleTermChange} />
          <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
        <div className="blocktwo">
          <img src={music} alt='music-girl' />
        </div>
        
      </div>
    ) 
}


export default SearchBar;