import React from 'react';
import SeasonList from '../../components/SeasonList/SeasonList.js';
import { useParams } from "react-router-dom";

class WrappedSeasons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: [],
            seriesName: ''
        }
    }

    componentDidMount() {
        const showID = this.props.params.id;
        // get the title of the show
        // todo: instead, get the title of the show from further up the chain in series, pass down through props
        fetch(`https://api.tvmaze.com/shows/${showID}`)
        .then(response => response.json())
        .then(json => this.setState({ seriesName: json.name }));
        // get the seasons of the show
        fetch(`https://api.tvmaze.com/shows/${showID}/seasons`)
        .then(response => response.json())
        .then(json => this.setState({ seasons: json }));
    }
   
    render() {
        const { seasons, seriesName } = this.state;
        return (
            <div>
                <h1>{seriesName}</h1>
                <hr />
                <SeasonList list={seasons} />
            </div>
        )
    }    
}


// this is a hook
// important note - this is the exported function which wraps the above class with hooked props
function Seasons(props) {
    const params = useParams();
    return <WrappedSeasons {...props} params={params} />
}

export default Seasons;