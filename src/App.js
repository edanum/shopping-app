import "./App.css";
import Suggestions from "./components/Suggestions";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/Searchbar";
import { Header } from "./components/Header";
import { ActiveItems } from "./components/ActiveItems";

function App() {
  const [inputValue, setInputValue] = useState();
  const [allItems, setAllItems] = useState();
  const [activeItems, setActiveItems] = useState([]);
  const [language, setLanguage] = useState("de");
  const [selectableItems, setSelectableItems] = useState();

  // Fetch Data & Set State
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";
      const response = await fetch(url);
      const result = await response.json();
      setSelectableItems(result);
    }
  }, []);

  
  function handleInputValue(e) {
    const inputLowerCase = e.target.value.toLowerCase();
    setInputValue(inputLowerCase);
  }

  function addItemToActiveList(item) {
    setActiveItems([...activeItems, item]);
    removeItemFromSearchList(item);
  }

  function deleteItemFromActiveList(item) {
    setActiveItems(
      activeItems.filter((item) => {
        return item === item ? "" : item;
      })
    );
  }

  function clearActiveList() {
    setActiveItems([]);
  }

  function removeItemFromSearchList(item) {
    // Item: {id: 'c2hvcHBpbmcuaXRlbTo2', de: 'Austernpilze', en: 'Oyster mushrooms'}
    return console.log(selectableItems.data);
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
        language={language}
        selectableItems={selectableItems}
        setSelectableItems={setSelectableItems}
      />
      <ActiveItems
        activeItems={activeItems}
        clearActiveList={clearActiveList}
        deleteItemFromActiveList={deleteItemFromActiveList}
        language={language}
      />
    </div>
  );
}

export default App;
