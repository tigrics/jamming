import React from "react";
import './SearchResults.css';
import Tracklist from '../TrackList/TrackList';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist onAdd={this.props.onAdd} isRemoval={false} tracks={this.props.searchResults} />
            </div>
        );
    }

}

export default SearchResults;
