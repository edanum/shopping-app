import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Results({ inputValue, addItemToActiveList, language }) {
  // Fetch Data & Set State
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
  }, []);

  // Set initalState (empty array)
  const [data, setData] = useState([]);

  //Reduce Data to names only array
  const shoppingNames = data?.data?.map((item) => {
    return { id: item._id, de: item.name["de"], en: item.name["en"] };
  });
  console.log("Aktuelle shopping Names");
  console.log(shoppingNames);
  //Create Suggestions

  const filteredShoppingNames = shoppingNames?.filter((item) => {
    if (inputValue === "") {
      return "";
    }
    if (inputValue === item.de) {
      return item?.[language];
    } else {
      return item?.[language].toLowerCase().includes(inputValue);
    }
  });

  console.log("Filtert noch und bricht erst beim Rendern ab")
  console.log(filteredShoppingNames)

  // Handle Click on Suggestions
  function clickHandle(item) {
    addItemToActiveList(item);
  }

  return (
    <Suggestions>
      {filteredShoppingNames?.map((item) => (
        <SuggestionsItem key={Math.random()} onClick={() => clickHandle(item)}>
          {language==="de" ? item.de : item.en}
        </SuggestionsItem>
      ))}
    </Suggestions>
  );
}

const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
  justify-content: center;
  
  margin-top: 20px;
`;

const SuggestionsItem = styled.button`
  display: flex;
  align-items: center;
  background-color: lightgray;
  color: black;
  height: 30px;
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background-color: #94a9ba;
    transition: 0.1s ease-in;
  }
`;
