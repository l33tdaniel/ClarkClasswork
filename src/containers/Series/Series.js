import React from 'react';
import SeriesList from '../../components/SeriesList/SeriesList.js';

class Series extends React.Component {
    onSeriesInputChange(event) {
        console.log(event);
        console.log(event.target.value);
        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
        .then (response => response.json())
        .then (json => this.setState({ series: json }));
    }
    constructor(props) {
        super(props);
        this.state = {
            series: []
        }
        this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
    }
    render() {
        return (
            <div>
                The length of the series array - {this.state.series.length}
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} />
                </div>
                <SeriesList list={this.state.series} />
            </div>
        )
    }
}

export default Series;