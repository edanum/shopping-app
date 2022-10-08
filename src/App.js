import "./App.css";
import Suggestions from "./components/Suggestions";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/Searchbar";
import { Header } from "./components/Header";
import { ActiveItems } from "./components/ActiveItems";

function App() {
  const [inputValue, setInputValue] = useState();
  const [activeItems, setActiveItems] = useState([]);
  const [language, setLanguage] = useState("de");
  

  function handleInputValue(e) {
    const inputLowerCase = e.target.value.toLowerCase();
    setInputValue(inputLowerCase);
  }

  function addItemToActiveList(item) {
    setActiveItems([...activeItems, item]);
    console.log("added following item to list:")
    console.log(item)
  }

  function deleteItemFromActiveList(item) {
    setActiveItems(activeItems.filter(item => {
    return item === item ? "" : item
  }))
}

  function clearActiveList() {
    setActiveItems([]);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        handleInputValue={handleInputValue}
        setLanguage={setLanguage}
      />
      <Suggestions
        inputValue={inputValue}
        addItemToActiveList={addItemToActiveList}
        handleInputValue={handleInputValue}
        language={language}
      />
      <ActiveItems
        activeItems={activeItems}
        clearActiveList={clearActiveList}
        deleteItemFromActiveList={deleteItemFromActiveList}
      />
    </div>
  );
}

export default App;
