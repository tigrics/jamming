import React from 'react';
import './TrackList.css';


class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((track) => {

                    return (
                        <ul key={track.id++}>
                            <li>{track.name}</li>
                            <li>{track.artist}</li>
                            <li>{track.album}</li>
                        </ul>
                    );
                })}
            </div>
        );
    }
}

export default TrackList;

//    <!-- You will add a map method that renders a set of Track components  -->