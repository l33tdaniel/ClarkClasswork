import './SeriesList.css';
import '../../containers/Series/Series.js';
import React from 'react';
function SeriesList(props) {

    return (
        <div>
            <ul>
                {props.list.map(series => (
                    <li>{series.show.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;