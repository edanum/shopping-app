import "./App.css";
import Results from "./components/Results";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/Searchbar";
import { Header } from "./components/Header";

function App() {
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    console.log(inputValue);
  }, []);

  function handleInputValue(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar handleInputValue={handleInputValue} />
      <Results inputValue={inputValue} />
    </div>
  );
}

export default App;
