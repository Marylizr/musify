import TrackList from '../TrackList/TrackList';
import '../SearchResults/searchResults.css';



const SearchResults = ({ searchResults, onAdd }) => {

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList 
          tracks={searchResults} 
          onAdd={onAdd}
        />
      </div>
    );
  
}

export default SearchResults;

