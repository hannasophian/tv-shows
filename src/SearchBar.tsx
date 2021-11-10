import { useState } from "react";
import IEpisode from "./utils/EpisodeType";
import EpisodeList from "./EpisodeList";
import episodes from "./episodes.json";
import findEpisodesMatching from "./utils/find-episodes-matching";
import getEpisodeCode from "./utils/get-episode-code";

interface SearchBarProps {
  episodes: IEpisode[];
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState<string>("");
  //const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
  const filteredEpisodes = findEpisodesMatching(query, props.episodes);
  return (
    <>
      <div className="searchbar">
        <select
          className="control"
          onChange={(event) => setQuery(event.target.value)} // = handleEpisodeSelected(event.target.value)}
          value={filteredEpisodes.length === 1 ? filteredEpisodes[0].id : ""}
        >
          {
            //create the options within the select
            episodes.map((episode) => (
              <option key={episode.id} value={episode.id}>
                {getEpisodeCode(episode.season, episode.number)} -{" "}
                {episode.name}
                {/* {makeEpisodeCode(episode) + " - " + episode.name} */}
              </option>
            ))
          }
        </select>
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
