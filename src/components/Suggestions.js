import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Results({
  inputValue,
  addItemToActiveList,
  language,
  selectableItems,
  setSelectableItems,
}) {
 

  //Create Suggestions
 
  

  const filteredShoppingNames = selectableItems?.filter((item) => {
    if (inputValue === "") {
      return "";
    }
    if (inputValue === item.de) {
      return item?.[language];
    } else {
      return item?.[language].toLowerCase().includes(inputValue);
    }
  });

  // Handle Click on Suggestions
  function clickHandle(item) {
    addItemToActiveList(item);
  }

  return (
    <Suggestions>
      {filteredShoppingNames?.map((item) => (
        <SuggestionsItem key={Math.random()} onClick={() => clickHandle(item)}>
          {language === "de" ? item.de : item.en}
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
