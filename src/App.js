import SearchEngine from "./SearchEngine";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Search Engine</h1>
      <SearchEngine city="Lagos" />
    </div>
  );
}
