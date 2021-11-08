import episodes from "./episodes.json";
import EpisodesEntry from "./EpisodesEntry";

function App(): JSX.Element {
  const allEpisodes = episodes.map((episode) => (
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
  return (
    <div className="App">
      <h1>TV List</h1>
      {allEpisodes}
    </div>
  );
}

export default App;
