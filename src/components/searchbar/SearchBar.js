import React, { useState } from 'react';
import '../searchbar/searchBar.css';



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
        <input placeholder="Enter A Song Title" onChange={handleTermChange} />
        <button className="SearchButton" onClick={search}>SEARCH</button>
      </div>
    ) 
}


export default SearchBar;