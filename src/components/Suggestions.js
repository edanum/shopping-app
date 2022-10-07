import styled from "styled-components";
import { useEffect, useState } from "react";
import nanoid from "nanoid";
import { ActiveItems } from "./ActiveItems";

export default function Results({ inputValue, addItemToActiveList}) {
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

  // Set initalState
  const [data, setData] = useState([]);

  //Reduce Data to names only array
  const shoppingNames = data?.data?.map((items) => {
    return items.name.de;
  });

  //Create Suggestions

  const filteredShoppingNames = shoppingNames?.filter((name) => {
    if (inputValue === "") {
      return "";
    }
    if (inputValue === name) {
      return name;
    } else {
      return name.toLowerCase().includes(inputValue);
    }
  });

  // Handle Click on Suggestions
    function clickHandle(item) {
      addItemToActiveList(item);
  }

  console.log(filteredShoppingNames);

  return (
    <Suggestions>
      {filteredShoppingNames?.map((item) => (
        <SuggestionsItem onClick={() => clickHandle(item)}>{item}</SuggestionsItem>
      ))}
    </Suggestions>
  );
}

const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const SuggestionsItem = styled.button`
  background-color: lightgray;
  color: black;
  height: 50px;
  border-radius: 10px;
  padding: 15px;

  &:hover{
    background-color: #94a9ba;
    transition: 0.1s ease-in;
  }
`;
