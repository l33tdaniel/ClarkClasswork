import Episodes from '../../containers/Episodes/Episodes.js';
function EpisodeList(props) {
    return (
        <div className="show-list-container">
            <ul className="show-list">
                {props.list.map(episode => (
                    <EpisodeListItem episode={episode} key={episode.id} />
                ))}
            </ul>
        </div>
    )
}

function EpisodeListItem({ episode }) {
    const episodeID = episode.id;
    const episodeNumber = episode.number;
    const episodeStart = episode.premiereDate;
    const episodeEnd = episode.endDate;
    let episodeImage = "https://place-hold.it/107x150";
    let episodeNetwork = '';
    try { episodeImage = episode.image.medium; } catch(e) { }
    try { episodeNetwork = episode.network.name; } catch(e) { }
    return (
        <li key={episodeID}>
            <a href={"/episode/" + episodeID + "/episodes"}>
                <div className="ib w20">
                    <img src={episodeImage} alt="" />
                </div>
                <div className="ib w80">
                    <h2>episode {episodeNumber}</h2>
                    <div>Network: {episodeNetwork}</div>
                    <div>Premiere Date: {episodeStart}</div>
                    <div>End Date: {episodeEnd}</div>                
                </div>
            </a>
        </li>
    )
}

// I don't think that I have the right imports or something
export default EpisodeList;