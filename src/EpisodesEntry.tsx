import getEpisodeCode from "./utils/get-episode-code";
interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function EpisodesEntry(props: IEpisode): JSX.Element {
  function removeTags(str: string): string {
    if (str === null || str === "") return "";
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <section>
      <h3>
        {props.name} - {getEpisodeCode(props.season, props.number)}
      </h3>
      <img src={props.image.medium} alt={props.name} />
      <br />
      {removeTags(props.summary)}
    </section>
  );
}

export default EpisodesEntry;
