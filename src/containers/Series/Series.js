import React from 'react';
import SeriesList from '../../components/SeriesList/SeriesList.js';

class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: []
        }
    }
    
    componentDidMount() {
      fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then (response => response.json())
      .then (json => this.setState({ series: json }));
    }

    render() {
        return (
            <div>
                The length of the series array - {this.state.series.length}
                <SeriesList list={this.state.series} />
            </div>
        )
    }
}
export default Series;