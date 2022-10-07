import "./App.css";
import Suggestions from "./components/Suggestions";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/Searchbar";
import { Header } from "./components/Header";
import { ActiveItems } from "./components/ActiveItems";

function App() {
  const [inputValue, setInputValue] = useState();
  const [activeItems, setActiveItems] = useState([]);

  function handleInputValue(e) {
    const inputLowerCase = e.target.value.toLowerCase();
    setInputValue(inputLowerCase);
    console.log(inputValue);
  }

  function addItemToActiveList(item) {
    setActiveItems([...activeItems, item]);
  }

  function clearActiveList() {
    setActiveItems([]);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        handleInputValue={handleInputValue}
        activeItems={activeItems}
        setActiveItems={setActiveItems}
        inputValue={inputValue}
      />
      <Suggestions
        inputValue={inputValue}
        addItemToActiveList={addItemToActiveList}
        handleInputValue={handleInputValue}
      />
      <ActiveItems
        activeItems={activeItems}
        clearActiveList={clearActiveList}
      />
    </div>
  );
}

export default App;
