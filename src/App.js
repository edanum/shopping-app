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

  // Fetch Data and set in on allItems
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";
      const response = await fetch(url);
      const result = await response.json();
      setAllItems(result);
    }
  }, []);

  // set up the data to be shown on filtering in Suggestions.js
  useEffect(() => {
    //Reduce Data to names only array
    setSelectableItems(
      allItems?.data?.map((item) => {
        return { id: item._id, de: item.name["de"], en: item.name["en"] };
      })
    );
  }, [allItems]);

  function handleInputValue(e) {
    const inputLowerCase = e.target.value.toLowerCase();
    setInputValue(inputLowerCase);
  }

  function addItemToActiveList(item) {
    setActiveItems([...activeItems, item]);
    removeItemFromSelectableItems(item);
  }

  function deleteItemFromActiveList(item) {
    setActiveItems(
      activeItems.filter((e) => {
        return item.id === e.id ? "" : item;
      })
    );
  }

  function clearActiveList() {
    setActiveItems([]);
  }

  function removeItemFromSelectableItems(item) {
    setSelectableItems(
      selectableItems.filter((e) => {
        return e.id !== item.id;
      })
    );
    console.log(selectableItems);
  }

  return (
    <div className="App">
      <Header language={language} />
      <SearchBar
        handleInputValue={handleInputValue}
        setLanguage={setLanguage}
        language={language}
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
        setActiveItems={setActiveItems}
      />
    </div>
  );
}

export default App;
