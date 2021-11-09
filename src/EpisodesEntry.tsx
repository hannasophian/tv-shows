import getEpisodeCode from "./utils/get-episode-code";
import IEpisode from "./utils/EpisodeType";

function EpisodesEntry(props: IEpisode): JSX.Element {
  function removeTags(str: string): string {
    if (str === null || str === "") return "";
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div className="episodesentry">
      <h3>
        {props.name} - {getEpisodeCode(props.season, props.number)}
      </h3>
      <img src={props.image.medium} alt={props.name} />
      <br />
      <p>{removeTags(props.summary)}</p>
    </div>
  );
}

export default EpisodesEntry;
