import "./App.css";
import SearchBar from "./components/SearchBar";
import './index.css';


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>GitHub User Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;
