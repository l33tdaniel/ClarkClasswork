import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList.js';
import { useParams } from "react-router-dom";

class WrappedEpisodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
            episodesName: ''
        }
    }

    componentDidMount() {
        const showID = this.props.params.id;
        // get the title of the show
        // todo: instead, get the title of the show from further up the chain in series, pass down through props
        fetch(`https://api.tvmaze.com/shows/${showID}`)
        .then(response => response.json())
        .then(json => this.setState({ episodesName: json.name }));
        // get the episodes of the show
        fetch(`https://api.tvmaze.com/seasons/${showID}/episodes`)
        .then(response => response.json())
        .then(json => this.setState({ episodes: json }));
    }
   
    render() {
        const { episodes, episodeName } = this.state;
        return (
            <div>
                <h1>{episodeName}</h1>
                <hr />
                <EpisodeList list={episodes} />
            </div>
        )
    }    
}

// important note - this is the exported function which wraps the above class with hooked props
function Episodes(props) {
    const params = useParams();
    return <WrappedEpisodes {...props} params={params} />
}

export default Episodes;