//___________IMPORTS___________

import "./App.css";
import Suggestions from "./components/Suggestions";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/Searchbar";
import { Header } from "./components/Header";
import { ActiveItems } from "./components/ActiveItems";
import useLocalStorage from "./hooks/useLocalStorage";
import GlobalStyle from "./globalStyles";

function App() {
  //___________ STATES__________
  const [inputValue, setInputValue] = useState("");
  const [allItems, setAllItems] = useState();
  const [activeItems, setActiveItems] = useLocalStorage("activeItems", []);
  const [language, setLanguage] = useLocalStorage("language", "de");
  const [selectableItems, setSelectableItems] = useState();
  const [recentItems, setRecentItems] = useLocalStorage("recentItems", []);

  //___________INITIALIZING DATA__________
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
    setSelectableItems(
      allItems?.data?.map((item) => {
        return { id: item._id, de: item.name["de"], en: item.name["en"] };
      })
    );
  }, [allItems]);

  console.log(allItems);

  //___________SAVE DATA TO LOCAL_________

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(activeItems));
  }, [activeItems]);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  useEffect(() => {
    localStorage.setItem("recentItems", JSON.stringify(recentItems));
  }, [recentItems]);

  useEffect(() => {
    console.log("das sind die activeItems:");
    console.log(activeItems);
  }, [activeItems]);

  useEffect(() => {
    console.log("das sind die selectableItems:");
    console.log(selectableItems);
  }, [selectableItems]);

   useEffect(() => {
     console.log("das sind die recenttems:");
     console.log(recentItems);
   }, [recentItems]);

  //___________COMPONENT FUNCTIONS_________

  function addItemToActiveList(item) {
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
      removeItemFromSelectableItems(item); // Remove Item out of selectable
      setInputValue("");
      item.toggled = false;
      recentItems.includes(item)
        ? console.log("REDUNDANT")
        : setRecentItems([item, ...recentItems]);
    } else {
      alert("Das Item befindet sich bereits in deiner Liste");
    }
  }

  function manageRecentItems(item) {
    console.log(recentItems);
    recentItems.includes(item)
      ? console.log("Item bereits drin")
      : setRecentItems(item, ...recentItems);
  }

  function deleteItemFromActiveList(item) {
    setActiveItems(
      activeItems.filter((e) => {
        return item.id === e.id ? "" : item;
      })
    );
    console.log("das ist das item")
    console.log(item)
    setSelectableItems([...selectableItems, item]);
  }

  function clearActiveList() {
    setActiveItems([]);
    //Reset der Suchliste:
    setSelectableItems(
      allItems?.data?.map((item) => {
        return { id: item._id, de: item.name["de"], en: item.name["en"] };
      })
    );
  }

  function removeItemFromSelectableItems(item) {
    setSelectableItems(
      selectableItems.filter((e) => {
        return e.id !== item.id;
      })
    );
  }

  //______________RENDER____________
  return (
    <div className="App">
      <GlobalStyle />
      <Header language={language} />
      <SearchBar
        setLanguage={setLanguage}
        language={language}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Suggestions
        inputValue={inputValue}
        addItemToActiveList={addItemToActiveList}
        language={language}
        selectableItems={selectableItems}
        recentItems={recentItems}
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
