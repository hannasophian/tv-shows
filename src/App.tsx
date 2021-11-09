import episodes from "./episodes.json";
//import EpisodesEntry from "./EpisodesEntry";
import AppFooter from "./AppFooter";
import "./App.css";
import SearchBar from "./SearchBar";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>TV List</h1>
      <SearchBar episodes={episodes} />
      <AppFooter />
    </div>
  );
}

export default App;
