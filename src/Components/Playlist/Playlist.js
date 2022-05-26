import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />

                <button className="Playlist-save">Save by SPOTIFY</button>
                <TrackList tracks={this.props.playlistTracks} />
            </div>
        );
    }
}

export default Playlist;
