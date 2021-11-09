import { useState } from "react";

interface SearchBarProps {
  displayedEpisodes: number;
  totalEpisodes: number;
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  const [inputTest, setInputText] = useState<string>("");
  return (
    <div className="searchbar">
      <input value={inputTest} onChange={(e) => setInputText(e.target.value)} />
      <>
        Displaying {props.displayedEpisodes}/{props.totalEpisodes} episodes
      </>
    </div>
  );
}
