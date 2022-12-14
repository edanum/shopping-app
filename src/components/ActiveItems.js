import styled from "styled-components";
import { useState } from "react";

export function ActiveItems({
  activeItems,
  setActiveItems,
  clearActiveList,
  deleteItemFromActiveList,
  language,
}) {
  function handleClear() {
    clearActiveList();
  }

  function handleToggleShopped(item) {
    item.toggled === true ? (item.toggled = false) : (item.toggled = true);
    setActiveItems([...activeItems]);
  }

  function handleDelete(item) {
    deleteItemFromActiveList(item);
  }

  return (
    <>
      {activeItems.length < 1 ? (
        ""
      ) : (
        <>
          <Subheader>
            {language === "en" ? "My List:" : "Meine Einkaufsliste"}
            <button onClick={handleClear}>
              {language === "en" ? "Clear list" : "Liste löschen"}
            </button>
          </Subheader>
        </>
      )}

      <List>
        {activeItems.map((item) => {
          return (
            <ListItemContainer key={Math.random()} toggled={item.toggled}>
              <ListItem
                key={item.id}
                onClick={() => handleToggleShopped(item)}
                toggled={item.toggled}
              >
                {language === "de" ? item.de : item.en}
              </ListItem>
              <DeleteButton
                key={Math.random()}
                onClick={() => handleDelete(item)}
                toggled={item.toggled}
              >
                X
              </DeleteButton>
            </ListItemContainer>
          );
        })}
      </List>
    </>
  );
}

const Subheader = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  margin-top: 50px;
  width: 72%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
`;

const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.toggled ? "#c3c3c3" : "#6c82b5")};
  color: ${(props) => (props.toggled ? "#838080" : "#f6f6f6")};
  list-style: none;
  width: 100%;
  margin: 0px;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  font-size: 24px;
  font-style: ${(props) => (props.toggled ? "italic" : "normal")};
  text-decoration: ${(props) => (props.toggled ? "line-through" : "none")};
  border: none;
`;

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  width: 90%;
  border-radius: 10px;
  background-color: ${(props) => (props.toggled ? "#c3c3c3" : "#6c82b5")};
  border: solid 1px #4a4949;
`;

const DeleteButton = styled.button`
  background-color: #ffffff00;
  color: ${(props) => (props.toggled ? "#838080" : "#f6f6f6")};
  border-radius: 50%;
  font-size: 20px;
  width: 40px;
  height: 40px;
  z-index: 2;
  margin-right: 10px;
`;
