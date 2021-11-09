import IEpisode from "./utils/EpisodeType";
import EpisodesEntry from "./EpisodesEntry";

interface EpisodeListProps {
  episodes: IEpisode[];
}

export default function EpisodeList(props: EpisodeListProps): JSX.Element {
  const episodesToShow = props.episodes.map((episode) => (
    <EpisodesEntry
      key={episode.id}
      id={episode.id}
      url={episode.url}
      name={episode.name}
      season={episode.season}
      number={episode.number}
      type={episode.type}
      airdate={episode.airdate}
      airtime={episode.airtime}
      airstamp={episode.airstamp}
      runtime={episode.runtime}
      image={{
        medium: episode.image.medium,
        original: episode.image.original,
      }}
      summary={episode.summary}
      _links={{ self: { href: episode._links.self.href } }}
    />
  ));
  return <div className="episodegrid">{episodesToShow}</div>;
}
