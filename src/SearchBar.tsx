import { useState } from "react";
import IEpisode from "./utils/EpisodeType";
import EpisodeList from "./EpisodeList";

interface SearchBarProps {
  episodes: IEpisode[];
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const filteredEpisodes = findEpisodesMatching(query, props.episodes);
  return (
    <>
      <div className="searchbar">
        <input
          id="searchInput"
          className="control"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for keywords"
        />
        <>
          <small>
            Showing {filteredEpisodes.length}/{props.episodes.length} episodes
          </small>
        </>
      </div>
      <EpisodeList episodes={filteredEpisodes} />
    </>
  );
}

function findEpisodesMatching(query: string, episodes: IEpisode[]) {
  return episodes.filter((episode) => episodeMatchesQuery(episode, query));
}

//Return true if episode's name or summary
//contains the given query string (case-insensitive)
//An episode is ALWAYS considered to contain the empty string ""
function episodeMatchesQuery(episode: IEpisode, query: string) {
  return (
    !query || contains(episode.name, query) || contains(episode.summary, query)
  );
}

//Return true if string a contains string b, case-insensitive.  Else false.
//Will return false if either a or b are falsy (e.g. empty strings)
function contains(a: string, b: string) {
  if (a === "" || b === "") {
    return false;
  } else {
    return a.toLowerCase().includes(b.toLowerCase());
  }
  // return (
  //     a && b &&
  //     a.toLowerCase().includes(b.toLowerCase())
  // );
}
