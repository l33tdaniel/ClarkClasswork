
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
    const episodeName = episode.name;
    const episodeNumber = episode.number;
    const episodeStart = episode.airdate;
    const episodeLength = episode.airtime;
    let episodeImage = "https://place-hold.it/107x150";
    let episodeNetwork = '';
    try { episodeImage = episode.image.medium; } catch(e) { }
    try { episodeNetwork = episode.network.name; } catch(e) { }
    return (
        <li key={episodeID}>
            <a href={"/episode/" + episodeID + "/episodes"}>
                <div className="ib w40">
                    <img src={episodeImage} alt="" />
                </div>
                <div className="ib w60">
                    <h2>Episode {episodeNumber}</h2>
                    <div>Title: {episodeName}</div>
                    <div>Premiere Date: {episodeStart}</div>
                    <div>Episode Length: {episodeLength}</div>                
                </div>
            </a>
        </li>
    )
}

// I don't think that I have the right imports or something
export default EpisodeList;