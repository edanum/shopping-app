import styled from "styled-components";
import { useState } from "react";

export function ActiveItems({
  activeItems,
  clearActiveList,
  deleteItemFromActiveList,
  language,
}) {
  function handleClear() {
    clearActiveList();
  }

  function handleToggle() {}

  function handleDelete(item) {
    deleteItemFromActiveList(item);
  }

  return (
    <>
          <Subheader>{language=== "en" ? "My List:" : "Meine Liste"}</Subheader>
          <button onClick={handleClear}>{language === "en" ? "Clear list" : "Liste löschen"}</button>
      <List>
        {activeItems.map((item) => {
          return (
            <ListItem key={item.id} onClick={handleToggle}>
              {language === "de" ? item.de : item.en}
              <DeleteButton onClick={handleDelete}>X</DeleteButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

const Subheader = styled.h2`
  font-size: 30px;
`;

const List = styled.ul`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
  margin: auto;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
`;

const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6c82b5;
  color: #fbf4f4;
  list-style: none;
  width: 90%;
  margin: 0px;
  padding: 15px;
  border-radius: 10px;
  font-size: 24px;
`;

const Checkbox = styled.input`
  margin-right: 30px;
  width: 50px;
  height: 30px;
`;

const DeleteButton = styled.button`
  background-color: #ffffff00;
  color: #ffffff;
  border-radius: 50%;
  font-size: 20px;
  width: 40px;
  height: 40px;
`;
