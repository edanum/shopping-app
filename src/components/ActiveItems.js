import styled from "styled-components";
import { useState } from "react";

export function ActiveItems({
  activeItems,
  clearActiveList,
  deleteItemFromActiveList,
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
      <Subheader>My List:</Subheader>
      <button onClick={handleClear}>Clear List</button>
      <List>
        {activeItems.map((item) => {
          return (
            <ListItem onClick={handleToggle}>
              {item}
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
  color: #FFFFFF;
  border-radius: 50%;
  font-size: 20px;
  width: 40px;
  height: 40px;
  
  
`;
