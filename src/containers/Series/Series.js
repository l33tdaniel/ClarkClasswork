import React from 'react';
import SeriesList from '../../components/SeriesList/SeriesList.js';
import Loader from '../../components/Loader/Loader.js';

class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            seriesName: '',
            isFetching: false
        }
        this.onSeriesInputChange = this.onSeriesInputChange.bind(this);
    }
    onSeriesInputChange(event) {
        this.setState({
            seriesName: event.target.value,
            isFetching: true
        })
        console.log(event);
        console.log(event.target.value);
        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
        .then (response => response.json())
        .then (json => this.setState({ series: json, isFetching: false}));
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name.</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV series have been found with this name.</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series;