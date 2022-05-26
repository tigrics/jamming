import React from "react";
import './Track.css';

class Track extends Track.Component {

    renderAction() {
        const sign = '';
        return isRemoval ? sign = '-' : sign = '+';
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{'trackName'}</h3>
                    <p>{'<!-- track artist will go here--> | <!-- track album will go here -->'}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        );
    }
}

export default Track;

/* <div className="Track">
                <div className="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div>
                <button className="Track-action"><!-- + or - will go here --></button>
            </div>
        );*/