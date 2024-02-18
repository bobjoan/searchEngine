import SearchEngine from "./SearchEngine";
import footer from "./footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Search Engine</h1>
      <SearchEngine city="Lagos" />
      <footer />S
    </div>
  );
}
