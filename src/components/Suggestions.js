//___________IMPORTS & PROPS___________

import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Results({
  inputValue,
  addItemToActiveList,
  language,
  selectableItems,
  recentItems,
}) {
  //______FILTER SELECATABLE ITEMS_______

  const filteredShoppingNames = selectableItems?.filter((item) => {
    return inputValue === ""
      ? ""
      : inputValue === item?.[language]
      ? item?.[language]
      : (item?.[language].toLowerCase().includes(inputValue),
        console.log("test"));
  });

  //______ITEM CLICK HANDLER_______
  function clickHandle(item) {
    addItemToActiveList(item);
  }

  //______________RENDER____________
  return (
    <Suggestions>
      {inputValue === ""
        ? recentItems?.map((item) => (
            <SuggestionsItem key={item.id} onClick={() => clickHandle(item)}>
              {language === "de" ? item.de : item.en}
            </SuggestionsItem>
          ))
        : filteredShoppingNames?.map((item) => (
            <SuggestionsItem key={item.id} onClick={() => clickHandle(item)}>
              {language === "de" ? item.de : item.en}
            </SuggestionsItem>
          ))}
    </Suggestions>
  );
}

//______________CSS____________

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
