import IEpisode from "./EpisodeType";

export default function findEpisodesMatching(
  query: string,
  episodes: IEpisode[]
): IEpisode[] {
  return episodes.filter((episode) => episodeMatchesQuery(episode, query));
}

//Return true if episode's name or summary
//contains the given query string (case-insensitive)
//An episode is ALWAYS considered to contain the empty string ""
function episodeMatchesQuery(episode: IEpisode, query: string) {
  return (
    !query ||
    contains(episode.name, query) ||
    contains(episode.summary, query) ||
    contains(episode.id.toString(), query)
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
